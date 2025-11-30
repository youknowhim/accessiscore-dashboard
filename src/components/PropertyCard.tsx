import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: {
    id: number;
    name: string;
    images: string[];
  };
  overall: number;
  badge: string;
  onView: () => void;
}

const PropertyCard = ({ property, overall, badge, onView }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [property.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const getBadgeColor = () => {
    if (badge.includes("Diamond")) return "bg-diamond text-white";
    if (badge.includes("Gold")) return "bg-gold text-foreground";
    if (badge.includes("Silver")) return "bg-silver text-foreground";
    return "bg-bronze text-white";
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={`${property.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {property.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-1">{property.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">{overall}</span>
              <span className="text-sm text-muted-foreground">/100</span>
            </div>
          </div>
          <Badge className={`${getBadgeColor()} text-sm px-3 py-1`}>
            {badge}
          </Badge>
        </div>

        <Button onClick={onView} className="w-full" size="lg">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
