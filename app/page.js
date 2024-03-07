'use client';

import CoinsCard from "@/components/ui/CoinsCard";
import { useCurrencyData } from "@/context/CurrencyDataProvider";
import { CookingPot } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const { trendingCoinsList } = useCurrencyData();


  return (
    <div className="p-4 flex flex-wrap gap-4">
          {trendingCoinsList?.map((item, index) => (
                <CoinsCard item={item} key={index} />
            ))}
    </div>
  );
  }
