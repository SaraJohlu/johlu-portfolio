import ProfileCard from "./ProfileCard";
import type directionProps from "./props";

interface mainProps {
    children?: React.ReactNode;
    direction?: directionProps;
}



export default function MainSide({children}: mainProps) {
    return(
        <main>
            <ProfileCard />
            {children}
        </main>
    );
};