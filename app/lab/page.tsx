import type { Metadata } from "next";
import { VariantLab } from "@/components/lab/VariantLab";

export const metadata: Metadata = {
  title: "SAVVA — варианты",
  description: "Сравнение вариантов ключевых секций. Внутренняя страница, не для публикации.",
  robots: { index: false, follow: false },
};

export default function LabPage() {
  return <VariantLab />;
}
