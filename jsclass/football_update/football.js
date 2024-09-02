const content = document.querySelector("#main");
const r2020 = document.querySelector("#resultone");
const r2021 = document.querySelector("#resulttwo");
const r2022 = document.querySelector("#resultthree");
const body = document.querySelector("body");


result2020();

r2020.addEventListener("click", () => {
    result2020();
});
r2021.addEventListener("click",()=> {
    result2021();
});
r2022.addEventListener("click",()=> {
    result2022();
});
//Getting the 2022 results
async function result2022() {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/bl1/2022/8");
        const data = await response.json();
        console.log(data);
        data.forEach((item) => {
            content.innerHTML += `
            <div class = "flex items-center justify-between w-full px-[100px] bg-blue-950 h-[200px] rounded-3xl">
            <div class = "flex flex-col items-center justify-center gap-1 w-[150px]">
            <img src = "${item.team1.teamIconUrl}" onerror="this.onerror=null; this.src='./img/jabulani.png';" alt = "" class = "h-[70px]">
            <h5 class="text-white text-center">${item.team1.teamName}</h5>
            </div>
            <h2 class = "text-white text-3xl font-semibold">${item.matchResults[0].pointsTeam1}</h2>
            <div class = "flex flex-col items-center justify-between py-11 gap-4">
            <h1 class = "text-gray-500 text-sm font-normal">${item.matchDateTime}</h1>
            <h1 class = "text-gray-400 text-sm font-medium">FT</h1>
            <h1 class = "text-gray-500 text-sm font-normal flex items-center gap-3"><span class = "text-lg">${item.matchResults[1].pointsTeam1}</span> HT <span class = "text-lg">${item.matchResults[1].pointsTeam2}</span></h1>
            </div>
            <h2 class = "text-white text-3xl font-semibold">${item.matchResults[0].pointsTeam2}</h2>
            <div class = "flex flex-col items-center justify-center gap-1 w-[150px]">
            <img src = "${item.team2.teamIconUrl}" onerror="this.onerror=null; this.src='./img/jabulani.png';" alt = "" class = "h-[70px]">
            <h5 class="text-white text-center">${item.team2.teamName}</h5>
            </div>
            </div>
            `
        });
        
    } catch (error) {
        console.log(error);
    }
}
//Getting the 2021 result
async function result2021() {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/bl1/2021/8");
        const data = await response.json();
        console.log(data);
        data.forEach((item) => {
            content.innerHTML += `
            <div class = "flex items-center justify-between w-full px-[100px] bg-blue-950 h-[200px] rounded-3xl">
            <div class = "flex flex-col items-center justify-center gap-1 w-[150px]">
            <img src = "${item.team1.teamIconUrl}" onerror="this.onerror=null; this.src='./img/jabulani.png';" alt = "" class = "h-[70px]">
            <h5 class="text-white text-center">${item.team1.teamName}</h5>
            </div>
            <h2 class = "text-white text-3xl font-semibold">${item.matchResults[0].pointsTeam1}</h2>
            <div class = "flex flex-col items-center justify-between py-11 gap-4">
            <h1 class = "text-gray-500 text-sm font-normal">${item.matchDateTime}</h1>
            <h1 class = "text-gray-400 text-sm font-medium">FT</h1>
            <h1 class = "text-gray-500 text-sm font-normal flex items-center gap-3"><span class = "text-lg">${item.matchResults[1].pointsTeam1}</span> HT <span class = "text-lg">${item.matchResults[1].pointsTeam2}</span></h1>
            </div>
            <h2 class = "text-white text-3xl font-semibold">${item.matchResults[0].pointsTeam2}</h2>
            <div class = "flex flex-col items-center justify-center gap-1 w-[150px]">
            <img src = "${item.team2.teamIconUrl}" onerror="this.onerror=null; this.src='./img/jabulani.png';" alt = "" class = "h-[70px]">
            <h5 class="text-white text-center">${item.team2.teamName}</h5>
            </div>
            </div>
            `
        });
        
    } catch (error) {
        console.log(error);
    }
}

//Getting the 2020 result
async function result2020() {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/bl1/2020/8");
        const data = await response.json();
        console.log(data);
        data.forEach((item) => {
            content.innerHTML += `
            <div class = "flex items-center justify-between w-full px-[100px] bg-blue-950 h-[200px] rounded-3xl">
            <div class = "flex flex-col items-center justify-center gap-1 w-[150px]">
            <img src = "${item.team1.teamIconUrl}" onerror="this.onerror=null; this.src='./img/jabulani.png';" alt = "" class = "h-[70px]">
            <h5 class="text-white text-center">${item.team1.teamName}</h5>
            </div>
            <h2 class = "text-white text-3xl font-semibold">${item.matchResults[0].pointsTeam1}</h2>
            <div class = "flex flex-col items-center justify-between py-11 gap-4">
            <h1 class = "text-gray-500 text-sm font-normal">${item.matchDateTime}</h1>
            <h1 class = "text-gray-400 text-sm font-medium">FT</h1>
            <h1 class = "text-gray-500 text-sm font-normal flex items-center gap-3"><span class = "text-lg">${item.matchResults[1].pointsTeam1}</span> HT <span class = "text-lg">${item.matchResults[1].pointsTeam2}</span></h1>
            </div>
            <h2 class = "text-white text-3xl font-semibold">${item.matchResults[0].pointsTeam2}</h2>
            <div class = "flex flex-col items-center justify-center gap-1 w-[150px]">
            <img src = "${item.team2.teamIconUrl}" onerror="this.onerror=null; this.src='./img/jabulani.png';" alt = "" class = "h-[70px]">
            <h5 class="text-white text-center">${item.team2.teamName}</h5>
            </div>
            </div>
            `
        });
    } catch (error) {
        console.log(error);
    }
}