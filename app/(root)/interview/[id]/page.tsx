import {getInterviewById} from "@/lib/actions/general.action";
import {redirect} from "next/navigation";


const Page = async ({ params }:RouteParams) => {
    const { id } = await params;

    const interview = await getInterviewById(id);

    if(!interview) redirect('/')

    return (
        <div>Page</div>
    )
}
export default Page
