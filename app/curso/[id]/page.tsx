import { CoursePage } from "@/components/course-page";

export async function generateStaticParams() {
  return [
    { id: "curso1" },
    { id: "curso2" },
    { id: "curso3" },
  ]; // Adicione os IDs dos cursos aqui
}

export default function Page({ params }: { params: { id: string } }) {
  return <CoursePage id={params.id} />;
}
