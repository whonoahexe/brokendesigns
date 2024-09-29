export declare global {
    interface WorkCardProps {
        src: string;
        alt: string;
        desc: string;
        cols: number;
        field: string;
        onClick?: () => void;
        className?: string;
    }

    interface WorkItem {
        index: number;
        field: string;
        category: string;
        title: string;
        description: string;
        image: string;
        homepage: boolean;
        url?: string;
        cols: number;
        showImg?: string;
        showImg2?: string;
        showImg3?: string;
        showImg4?: string;
    }

    interface ButtonProps {
        type?: "submit" | "reset" | "button";
        isActive?: boolean;
        text: ReactNode;
        disabled?: boolean;
        classname?: string;
        onClick?: () => void;
    }

    interface PageProps {
        params: {
            slug: string;
        };
    }
}
