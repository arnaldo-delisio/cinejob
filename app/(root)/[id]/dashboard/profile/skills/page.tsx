import SkillsSocialsForm from "@/components/shared/Forms/SkillsSocialsForm";
import { auth } from "@clerk/nextjs"

const SkillsSocialsInfo = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py">
        <h3 className="wrapper h3-bold text-center"> Competenze</h3>
      </section>
      <div className="wrapper my-8">
        <SkillsSocialsForm userId={userId} type="Update" />
      </div>
    </>
  )
}

export default SkillsSocialsInfo