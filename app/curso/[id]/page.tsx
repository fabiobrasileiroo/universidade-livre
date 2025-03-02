import { CoursePage } from "@/components/course-page";

export async function generateStaticParams() {
  return []; // Retorna vazio para permitir fallback
}

export default function Page({ params }: { params: { id: string } }) {
  if (!params.id) {
    return <p>Página não encontrada</p>; // Ou redirecione para erro
  }

  return <CoursePage id={params.id} />;
}
