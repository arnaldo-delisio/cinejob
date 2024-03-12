import PhysicalInfoForm from "@/components/shared/Forms/PhysicalInfoForm";
import { auth } from "@clerk/nextjs"

const PhysicalInfo = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py">
        <h3 className="wrapper h3-bold text-center"> Informazioni Fisiche </h3>
      </section>
      <div className="wrapper my-8">
        <PhysicalInfoForm userId={userId} type="Update" />
      </div>
    </>
  )
}

export default PhysicalInfo