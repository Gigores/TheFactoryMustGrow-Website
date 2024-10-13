function scroll_to(element_id) {
    document.querySelector(element_id).scrollIntoView();
}
function generate_download_tab(file_name, file_path) {
    return `<div class="download"> <a href="${file_path}" target="_blank" download>DOWNLOAD</a> ${file_name} </div> \n`;
}
function generateDownloadLink(fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
}
let files = [
    { 
      name: "FMG 0.6 BETA", 
      file_id: "1E8gtMO07wcQEesWnulopLCbS_aLY8txQ"
    },
    { 
      name: "FMG 0.5 BETA", 
      file_id: "1ZSOQ8Fq5ut1xwxtSgUVEcJfrE60esBhe"
    },
    { 
      name: "FMG 0.4 BETA", 
      file_id: "1Wo76prf0LsMFOrfbkHw_g9UX5ir-eayJ"
    },
    { 
      name: "FMG 0.3 BETA", 
      file_id: "13sFX_uIvwNvaPAZ-aPb9d_MwcHoeU0l9"
    }
  ];  
let download_tab = document.getElementById("downloads");
for (let file_data of files) {
    download_tab.insertAdjacentHTML('beforeend', generate_download_tab(file_data["name"], generateDownloadLink(file_data["file_id"])));
}