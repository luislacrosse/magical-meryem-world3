import { Card } from "@/components/ui/card";

const photos = [
  { src: "/placeholder.svg", alt: "Meryem playing" },
  { src: "/placeholder.svg", alt: "Meryem smiling" },
  { src: "/placeholder.svg", alt: "Meryem with family" },
];

export const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {photos.map((photo, index) => (
        <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-48 object-cover rounded-lg"
          />
        </Card>
      ))}
    </div>
  );
};