import { ReactComponent as MemoryIcon } from "../../../assets/images/icon-memory.svg";
import { ReactComponent as ReactionIcon } from "../../../assets/images/icon-reaction.svg";
import { ReactComponent as VerbalIcon } from "../../../assets/images/icon-verbal.svg";
import { ReactComponent as VisualIcon } from "../../../assets/images/icon-visual.svg";
 

export const mainSkillItems = [
    {
        id: 0,
        icon: <ReactionIcon />,
        backgroundColor: "hsla(0, 100%, 67%, 0.103)",
        text: "Reaction",
        percentage: "80",
        textColor: "hsl(0, 56%, 53%)"
    },
    {
        id: 1,
        icon: <MemoryIcon />,
        backgroundColor: "hsla(39, 100%, 56%, 0.068)",
        text: "Memory",
        percentage: "92",
        textColor: "hsl(39, 100%, 56%)"
    },
    {
        id: 2,
        icon: <VerbalIcon />,
        backgroundColor: "hsla(166, 100%, 37%, 0.068)",
        text: "Verbal",
        percentage: "61",
        textColor: "hsl(166, 100%, 37%)"
    },
    {
        id: 3,
        icon: <VisualIcon />,
        backgroundColor: "hsla(234, 85%, 45%, 0.062)",
        text: "Visual",
        percentage: "72",
        textColor: "hsl(234, 85%, 45%)"
    }
]