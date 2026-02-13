interface statsCards {
    
    numbers:string;
    title:string;
    position?:string;
    shape?:string;
    width?:string;

}

export const statsCards:statsCards[] = [
    {
        numbers:"15+",
        title:"Products",
        position:"self-end"
    },
    {
        numbers:"2.5B+",
        title:"Images Processed",
        position:"self-start",
        shape:"rounded-[60px]",
        width:"max-w-82"
    },
    {
        numbers:"800k+",
        title:"Daily Active Users",
        position:"self-end"
    }
]