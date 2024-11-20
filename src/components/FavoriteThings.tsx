import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const favorites = [
  { title: "Favorite Color", content: "Pink" },
  { title: "Favorite Animal", content: "Unicorn" },
  { title: "Favorite Food", content: "Ice Cream" },
];

export const FavoriteThings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {favorites.map((item, index) => (
        <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
          <Heart className="w-8 h-8 mx-auto mb-4 text-soft-pink" fill="#FFDEE2" />
          <h3 className="font-bubblegum text-xl mb-2">{item.title}</h3>
          <p className="text-lg text-gray-600">{item.content}</p>
        </Card>
      ))}
    </div>
  );
};