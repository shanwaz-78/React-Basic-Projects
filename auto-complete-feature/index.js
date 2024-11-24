const tableTag = document.getElementById("searchTable");
const resultPerPage = 20;
let currentPage = 1;
let isLoading = false;

function createHeadings(headings) {
  const tHead = generateElement("thead");
  const tr = generateElement("tr");

  headings.forEach((heading) => {
    const th = generateElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });

  tHead.appendChild(tr);
  tableTag.appendChild(tHead);
}

async function generateTableData(API_URL, resultsPerPage = 20) {
  if (isLoading) return;
  isLoading = true;

  const { results } = await fetchData(API_URL, resultsPerPage, currentPage);

  if (results && results.length > 0) {
    const tableData =
      tableTag.querySelector("tbody") || generateElement("tbody");

    results.forEach((result) => {
      const tr = generateElement("tr");

      const fields = [
        result.geoname_id,
        result.name,
        result.ascii_name,
        result.alternate_names && result.alternate_names.length > 0
          ? result.alternate_names[0]
          : "N/A",
        result.feature_class,
        result.feature_code,
        result.timezone,
        result.population,
        result.latitude,
        result.longitude,
      ];

      fields.forEach((field) => {
        const td = generateElement("td");
        td.textContent = field || "N/A";
        tr.appendChild(td);
      });

      tableData.appendChild(tr);
    });

    if (!tableTag.querySelector("tbody")) {
      tableTag.appendChild(tableData);
    }
    currentPage++;
  } else {
    console.error("No more data available");
  }

  isLoading = false;
}

async function fetchData(URL, perPageLimit, page) {
  try {
    const response = await fetch(
      `${URL}?limit=${perPageLimit}&offset=${(page - 1) * perPageLimit}`
    );
    if (!response.ok) {
      throw new Error("Error while fetching data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

function generateElement(elementName) {
  return document.createElement(elementName);
}

function handleScroll() {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    !isLoading
  ) {
    generateTableData(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-500/records",
      resultPerPage
    );
  }
}

window.addEventListener("scroll", handleScroll);

window.addEventListener("DOMContentLoaded", () => {
  createHeadings([
    "Geoname ID",
    "Name",
    "ASCII Name",
    "Alternate Name",
    "Feature Class",
    "Feature Code",
    "Timezone",
    "Population",
    "Latitude",
    "Longitude",
  ]);

  generateTableData(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-500/records",
    resultPerPage
  );
});
