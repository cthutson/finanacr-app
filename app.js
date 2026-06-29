const storeKey="titan52_mobile_data";
let data=JSON.parse(localStorage.getItem(storeKey))||{finance:{income:9000,bills:5400,savings:0},peptides:[],workouts:[],business:{revenue:0,expenses:300}};
function save(){localStorage.setItem(storeKey,JSON.stringify(data));render();}
function money(n){return "$"+Number(n||0).toLocaleString();}
function show(id){document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active");}
function saveFinance(){data.finance={income:+income.value,bills:+bills.value,savings:+savings.value};save();}
function addPeptide(){data.peptides.push({name:pepName.value,dose:pepDose.value,schedule:pepSchedule.value});pepName.value=pepDose.value=pepSchedule.value="";save();}
function addWorkout(){data.workouts.push({name:workoutName.value,day:workoutDay.value});workoutName.value=workoutDay.value="";save();}
function saveBusiness(){data.business={revenue:+revenue.value,expenses:+expenses.value};save();}
function calcRetirement(){let years=(+retireAge.value||57)-(+age.value||52),bal=+tsp.value||0,m=+monthly.value||0;for(let i=0;i<years*12;i++)bal=bal*1.005+m;retireResult.textContent=`Estimated TSP: ${money(bal)}`;}
function render(){income.value=data.finance.income;bills.value=data.finance.bills;savings.value=data.finance.savings;financeResult.textContent=`Estimated cash after bills: ${money(data.finance.income-data.finance.bills)}. Emergency fund: ${money(data.finance.savings)}.`;pepList.innerHTML=data.peptides.map(p=>`<li><b>${p.name}</b> — ${p.dose}, ${p.schedule}</li>`).join("");workoutList.innerHTML=data.workouts.map(w=>`<li><b>${w.day}</b> — ${w.name}</li>`).join("");revenue.value=data.business.revenue;expenses.value=data.business.expenses;bizResult.textContent=`Monthly profit: ${money(data.business.revenue-data.business.expenses)}.`}
render();