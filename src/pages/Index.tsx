import { useState } from "react";
import { getAllProperties } from "@/utils/engine";
import PropertyCard from "@/components/PropertyCard";
import DetailsModal from "@/components/DetailsModal";
import SearchBox from "@/components/SearchBox";
import property1Img from "@/assets/property1-1.jpg";
import property2Img from "@/assets/property2-1.jpg";
import property3Img from "@/assets/property3-1.jpg";
import property4Img from "@/assets/property4-1.jpg";
import property5Img from "@/assets/property5-1.jpg";
import property6Img from "@/assets/property6-1.jpg";
import property7Img from "@/assets/property7-1.jpg";
import property8Img from "@/assets/property8-1.jpg";
import property9Img from "@/assets/property9-1.jpg";
import property10Img from "@/assets/property10-1.jpg";

const propertyImages: Record<number, string[]> = {
  1: [property1Img, property1Img, property1Img],
  2: [property2Img, property2Img, property2Img],
  3: [property3Img, property3Img, property3Img],
  4: [property4Img, property4Img, property4Img],
  5: [property5Img, property5Img, property5Img],
  6: [property6Img, property6Img, property6Img],
  7: [property7Img, property7Img, property7Img],
  8: [property8Img, property8Img, property8Img],
  9: [property9Img, property9Img, property9Img],
  10: [property10Img, property10Img, property10Img],
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
