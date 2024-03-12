import PersonalInfoForm from "@/components/shared/Forms/PersonalInfoForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs"

type PersonalInfoProps = {
  params: {
    id: string
  }
}

const PersonalInfo = async ({ params: { id } }: PersonalInfoProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const user = await getUserById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py">
        <h3 className="wrapper h3-bold text-center"> Informazioni Personali </h3>
      </section>
      <div className="wrapper my-8">
        <PersonalInfoForm
        type="Update"
        user={user} 
        userId={userId}
         />
      </div>
    </>
  )
}

export default PersonalInfo