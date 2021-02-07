// document.getElementById('searchTerms').addEventListener('submit', searchTerm);

// function searchTerm(e){
//     console.log("Search!");
// }

// function searchFilter() {
//   checkAll();
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[1];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// function checkAll(){
//   var dropdown = document.getElementById('filter');
//   var topics = dropdown.getElementsByTagName("label");
//   for (i = 0; i < topics.length-1; i++){
//     topics[i].getElementsByTagName("input")[0].checked = true;
//   }
//   topics[topics.length-1].getElementsByTagName("input")[0].checked = false;
// }

// function clearInput(){
//   input = document.getElementById("myInput").value = "";
// }

// function updateFilter() {
//   clearInput();

//   var dropdown = document.getElementById('filter');
//   var topics = dropdown.getElementsByTagName("label");
//   var table = document.getElementById("myTable");
//   var tr = table.getElementsByTagName("tr");
//   var none = true;

//   for (i = 0; i < topics.length-1; i++){
//     var checked = topics[i].getElementsByTagName("input")[0].checked;
//     for (j = 0; j < tr.length; j++){
//       var td = tr[j].getElementsByTagName("td")[0];
//       if (td){
//         if (topics[i].textContent.trim() == td.innerText){
//           if (checked){
//             tr[j].style.display = "";
//             none = false;
//           }
//           else tr[j].style.display = "none";
//         }
//       }
//     }
//   }
//   topics[topics.length-1].getElementsByTagName("input")[0].checked = none;
// }

// function filterNone() {
//   clearInput();
//   var dropdown = document.getElementById('filter');
//   var topics = dropdown.getElementsByTagName("label");
//   var checked = topics[topics.length-1].getElementsByTagName("input")[0].checked;
//   if (checked){
//     for (i = 0; i < topics.length-1; i++){
//       topics[i].getElementsByTagName("input")[0].checked = false;
//     }
//   } else {
//     for (i = 0; i < topics.length-1; i++){
//       topics[i].getElementsByTagName("input")[0].checked = true;
//     }
//   }
//   updateFilter();
// }

// // Runs when document has loaded
// (function() {
//     console.log("View all!");
//     fetch('terms.json')
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data);
//         let output = '';
//         let topics = '';
//         for (var key in data){
//           topics += `
//           <li><label>
//              <input type="checkbox" onclick="updateFilter()" checked="true">${key}
//           </label></li>
//           `
//             for (i = 0; i < data[key].length; i++){
//                 output += `
//                     <tr>
//                     <td>${key}</td>
//                     <td>${data[key][i]['term']}</td>
//                     <td>${data[key][i]['definition']}</td>
//                     </tr>
//                 `;
//             }
//         }
//         document.getElementById('outputAll').innerHTML = output;
//         topics += `
//         <li><label>
//           <input type="checkbox" onclick="filterNone()"> <em>None</em>
//         </label></li>
//         `
//         document.getElementById('filter').innerHTML = topics;
//     })
//     .catch((err) => console.log(err));
//  })();