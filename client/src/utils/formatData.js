export default function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-GB",
        {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    // console.log(formattedDate);
    return formattedDate
}