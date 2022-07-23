let object = [
    {Name: "One Dance", Description:"Crake feat CatKid & Cyla", Timing:"2:54"},
    {Name:"Panda", Description:"cattee", Timing:"4:06"},
    {Name:"Can't Stop the Feeling!", Description:"Catin Cimblerlake", Timing:"3:56"},
    {Name:"Work From Home", Description:"Cat Harmony feat Colla", Timing:"3:34"}
]

let loadTableData = (object) => {
    const tableData = document.getElementById("tableData");
    let htmlData = "";

    for(let obj of object){
        htmlData += `<tr><td>${obj.Name}</td>
        <td>${obj.Description}</td><td>${obj.Timing}</td><td><button>CATTY CLOUD SYNC</button></td></tr>`
    }
    tableData.innerHTML = htmlData;
}
window.onload = () => {
loadTableData(object);
};