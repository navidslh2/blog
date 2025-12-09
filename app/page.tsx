import Cards from "@/components/card/Cards";
import Container from "@/ui/Container";


export default function Home() {
  return (
    <Container className="py-25">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 h-screen"><Cards  /></div>
        <div className=" col-span-1 bg-amber-700">
          464646
        </div>
      </div>
    </Container>
  );
}
