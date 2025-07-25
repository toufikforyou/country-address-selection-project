let countryData = null;

document.addEventListener('DOMContentLoaded', function() {
  loadCountryData();
});

async function loadCountryData() {
  try {
    const response = await fetch('./json/country.json');
    const data = await response.json();
    countryData = data.country[0];
    populateJsonDivisions();
  } catch (error) {
    console.error('Error loading country data:', error);
    const divisionsSelect = document.getElementById('json-divisions');
    if (divisionsSelect) {
      divisionsSelect.innerHTML = '<option disabled class="error">Error loading data</option>';
    }
  }
}

function populateJsonDivisions() {
  if (!countryData || !countryData.division) return;
  
  const divisionsSelect = document.getElementById('json-divisions');
  if (!divisionsSelect) return;
  
  let optionsHTML = '<option disabled selected>Select Division</option>';
  
  countryData.division.forEach(division => {
    optionsHTML += `<option value="${division.name}">${division.name}</option>`;
  });
  
  divisionsSelect.innerHTML = optionsHTML;
}

function jsonDivisionList() {
  const selectedDivision = document.getElementById('json-divisions')?.value;
  
  if (!countryData || !selectedDivision) return;
  
  const division = countryData.division.find(div => div.name === selectedDivision);
  
  if (division && division.district) {
    let districtHTML = '<option disabled selected>Select District</option>';
    
    division.district.forEach(district => {
      districtHTML += `<option value="${district.name}">${district.name}</option>`;
    });
    
    const districtSelect = document.getElementById('json-districts');
    if (districtSelect) {
      districtSelect.innerHTML = districtHTML;
    }
  }

  clearDropdown('json-upazilas', 'Select Upazila');
  clearDropdown('json-unions', 'Select Union');
  clearDropdown('json-villages', 'Select Village');
}

function jsonDistrictList() {
  const selectedDivision = document.getElementById('json-divisions')?.value;
  const selectedDistrict = document.getElementById('json-districts')?.value;
  
  if (!countryData || !selectedDivision || !selectedDistrict) return;
  
  const division = countryData.division.find(div => div.name === selectedDivision);
  const district = division ? division.district.find(dist => dist.name === selectedDistrict) : null;
  
  if (district && district.upazila) {
    let upazilaHTML = '<option disabled selected>Select Upazila</option>';
    
    district.upazila.forEach(upazila => {
      upazilaHTML += `<option value="${upazila.name}">${upazila.name}</option>`;
    });
    
    const upazilaSelect = document.getElementById('json-upazilas');
    if (upazilaSelect) {
      upazilaSelect.innerHTML = upazilaHTML;
    }
  }

  clearDropdown('json-unions', 'Select Union');
  clearDropdown('json-villages', 'Select Village');
  
  console.log('JSON District selected:', selectedDistrict);
}

function jsonUpazilaList() {
  const selectedDivision = document.getElementById('json-divisions')?.value;
  const selectedDistrict = document.getElementById('json-districts')?.value;
  const selectedUpazila = document.getElementById('json-upazilas')?.value;
  
  if (!countryData || !selectedDivision || !selectedDistrict || !selectedUpazila) return;
  
  const division = countryData.division.find(div => div.name === selectedDivision);
  const district = division ? division.district.find(dist => dist.name === selectedDistrict) : null;
  const upazila = district ? district.upazila.find(up => up.name === selectedUpazila) : null;
  
  if (upazila && upazila.union) {
    let unionHTML = '<option disabled selected>Select Union</option>';
    
    upazila.union.forEach(union => {
      if (union.name) {
        unionHTML += `<option value="${union.name}">${union.name}</option>`;
      }
    });
    
    const unionSelect = document.getElementById('json-unions');
    if (unionSelect) {
      unionSelect.innerHTML = unionHTML;
    }
  }

  clearDropdown('json-villages', 'Select Village');
  console.log('JSON Upazila selected:', selectedUpazila);
}

function jsonUnionList() {
  const selectedDivision = document.getElementById('json-divisions')?.value;
  const selectedDistrict = document.getElementById('json-districts')?.value;
  const selectedUpazila = document.getElementById('json-upazilas')?.value;
  const selectedUnion = document.getElementById('json-unions')?.value;
  
  if (!countryData || !selectedDivision || !selectedDistrict || !selectedUpazila || !selectedUnion) return;
  
  const division = countryData.division.find(div => div.name === selectedDivision);
  const district = division ? division.district.find(dist => dist.name === selectedDistrict) : null;
  const upazila = district ? district.upazila.find(up => up.name === selectedUpazila) : null;
  const union = upazila ? upazila.union.find(un => un.name === selectedUnion) : null;
  
  if (union && union.village && union.village.length > 0) {
    let villageHTML = '<option disabled selected>Select Village</option>';
    
    union.village.forEach(village => {
      if (village.name) {
        if (Array.isArray(village.name)) {
          village.name.forEach(villageName => {
            villageHTML += `<option value="${villageName}">${villageName}</option>`;
          });
        } else {
          villageHTML += `<option value="${village.name}">${village.name}</option>`;
        }
      }
    });
    
    const villageSelect = document.getElementById('json-villages');
    if (villageSelect) {
      villageSelect.innerHTML = villageHTML;
    }
  } else {
    const villageSelect = document.getElementById('json-villages');
    if (villageSelect) {
      villageSelect.innerHTML = '<option disabled selected>No villages available</option>';
    }
  }

  console.log('JSON Union selected:', selectedUnion);
}

function clearDropdown(elementId, defaultText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = `<option disabled selected>${defaultText}</option>`;
  }
}

function getSelectedValues() {
  return {
    js: {
      division: document.getElementById('js-divisions')?.value || null,
      district: document.getElementById('js-districts')?.value || null,
      upazila: document.getElementById('js-upazilas')?.value || null,
      union: document.getElementById('js-unions')?.value || null,
      village: document.getElementById('js-villages')?.value || null
    },
    json: {
      division: document.getElementById('json-divisions')?.value || null,
      district: document.getElementById('json-districts')?.value || null,
      upazila: document.getElementById('json-upazilas')?.value || null,
      union: document.getElementById('json-unions')?.value || null,
      village: document.getElementById('json-villages')?.value || null
    }
  };
}

function showCompleteAddress() {
  const values = getSelectedValues();
  console.log('Complete Address Data:', values);
  return values;
}
