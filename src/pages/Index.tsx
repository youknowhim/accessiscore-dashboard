import { useState } from "react";
import { getAllProperties } from "@/utils/engine";
import PropertyCard from "@/components/PropertyCard";
import DetailsModal from "@/components/DetailsModal";
import SearchBox from "@/components/SearchBox";
import property1Img1 from "@/assets/property1-1.jpg";
import property1Img2 from "@/assets/property1-2.jpg";
import property1Img3 from "@/assets/property1-3.jpg";
import property2Img1 from "@/assets/property2-1.jpg";
import property2Img2 from "@/assets/property2-2.jpg";
import property2Img3 from "@/assets/property2-3.jpg";
import property3Img1 from "@/assets/property3-1.jpg";
import property3Img2 from "@/assets/property3-2.jpg";
import property3Img3 from "@/assets/property3-3.jpg";
import property4Img1 from "@/assets/property4-1.jpg";
import property4Img2 from "@/assets/property4-2.jpg";
import property4Img3 from "@/assets/property4-3.jpg";
import property5Img1 from "@/assets/property5-1.jpg";
import property5Img2 from "@/assets/property5-2.jpg";
import property5Img3 from "@/assets/property5-3.jpg";
import property6Img1 from "@/assets/property6-1.jpg";
import property6Img2 from "@/assets/property6-2.jpg";
import property6Img3 from "@/assets/property6-3.jpg";
import property7Img1 from "@/assets/property7-1.jpg";
import property7Img2 from "@/assets/property7-2.jpg";
import property7Img3 from "@/assets/property7-3.jpg";
import property8Img1 from "@/assets/property8-1.jpg";
import property8Img2 from "@/assets/property8-2.jpg";
import property8Img3 from "@/assets/property8-3.jpg";
import property9Img1 from "@/assets/property9-1.jpg";
import property9Img2 from "@/assets/property9-2.jpg";
import property9Img3 from "@/assets/property9-3.jpg";
import property10Img1 from "@/assets/property10-1.jpg";
import property10Img2 from "@/assets/property10-2.jpg";
import property10Img3 from "@/assets/property10-3.jpg";

const propertyImages: Record<number, string[]> = {
  1: [property1Img1, property1Img2, property1Img3],
  2: [property2Img1, property2Img2, property2Img3],
  3: [property3Img1, property3Img2, property3Img3],
  4: [property4Img1, property4Img2, property4Img3],
  5: [property5Img1, property5Img2, property5Img3],
  6: [property6Img1, property6Img2, property6Img3],
  7: [property7Img1, property7Img2, property7Img3],
  8: [property8Img1, property8Img2, property8Img3],
  9: [property9Img1, property9Img2, property9Img3],
  10: [property10Img1, property10Img2, property10Img3],
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const allProperties = getAllProperties();
  
  // Filter properties based on search
  const filteredProperties = allProperties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Dynamic Accessibility Dashboard
          </h1>
          <p className="text-lg md:text-xl opacity-95">
            Real-time property accessibility scoring powered by IoT sensors, user feedback, and adaptive algorithms
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-12">
        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          totalProperties={allProperties.length}
          filteredCount={filteredProperties.length}
        />

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={{ ...property, images: propertyImages[property.id] }}
              overall={property.overall}
              badge={property.badge}
              onView={() => handleViewDetails(property)}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <p className="text-2xl text-muted-foreground mb-2">No properties found</p>
            <p className="text-muted-foreground">
              Please search for properties numbered 1 through {allProperties.length}
            </p>
          </div>
        )}
      </main>

      {/* Details Modal */}
      {selectedProperty && (
        <DetailsModal
          property={selectedProperty}
          details={selectedProperty.details}
          onClose={handleCloseModal}
          open={modalOpen}
        />
      )}
    </div>
  );
};

export default Index;
