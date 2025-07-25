/**
 * Bangladesh Address Selection - Complete Administrative Levels Demo
 * JavaScript functionality for comparing hardcoded vs JSON data approaches
 * Supports: Divisions, Districts, Upazilas, Unions, and Villages
 */

// Global variable for JSON data
let countryData = null;

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  loadCountryData();
});

/**
 * Load JSON data asynchronously
 */
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

/**
 * Populate JSON divisions dropdown
 */
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

// ===== JAVASCRIPT HARDCODED APPROACH =====

/**
 * Handle JavaScript hardcoded division selection
 */
function jsDivisionList() {
  const divisionValue = document.getElementById('js-divisions')?.value;
  if (!divisionValue) return;
  
  let districtOptions = '<option disabled selected>Select District</option>';

  // District mapping for each division
  const divisionDistrictMap = {
    'Barishal': ['Barguna', 'Bhola', 'Barishal', 'Jhalokati', 'Pirojpur', 'Patuakhali'],
    'Chattogram': ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Cumilla', 'Coxs Bazar', 'Lakshmipur', 'Feni', 'Khagrachhari', 'Noakhali', 'Rangamati'],
    'Dhaka': ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
    'Khulna': ['Jashore', 'Satkhira', 'Meherpur', 'Narail', 'Chuadanga', 'Kushtia', 'Khulna', 'Bagerhat', 'Magura', 'Jhenaidah'],
    'Mymensingh': ['Sherpur', 'Mymensingh', 'Jamalpur', 'Netrokona'],
    'Rajshahi': ['Sirajgonj', 'Bogura', 'Rajshahi', 'Pabna', 'Natore', 'Naogaon', 'Joypurhat', 'Chapainawabganj'],
    'Rangpur': ['Kurigram', 'Rangpur', 'Thakurgaon', 'Gaibandha', 'Nilphamari', 'Lalmonirhat', 'Dinajpur', 'Panchagarh'],
    'Sylhet': ['Sunamganj', 'Habiganj', 'Sylhet', 'Moulvibazar']
  };

  const districts = divisionDistrictMap[divisionValue];
  if (districts) {
    districts.forEach(district => {
      districtOptions += `<option value="${district}">${district}</option>`;
    });
  }

  const districtSelect = document.getElementById('js-districts');
  if (districtSelect) {
    districtSelect.innerHTML = districtOptions;
  }

  // Clear subsequent dropdowns
  clearDropdown('js-upazilas', 'Select Upazila');
  clearDropdown('js-unions', 'Select Union');
  clearDropdown('js-villages', 'Select Village');
}

/**
 * Handle JavaScript hardcoded district selection
 */
function jsDistrictList() {
  const selectedDistrict = document.getElementById('js-districts')?.value;
  if (!selectedDistrict) return;
  
  // For demo purposes, showing sample upazilas for some districts
  const districtUpazilaMap = {
    'Dhaka': ['Savar', 'Dhamrai', 'Keraniganj', 'Nawabganj', 'Dohar'],
    'Chattogram': ['Anwara', 'Banshkhali', 'Boalkhali', 'Chandnaish', 'Fatikchhari'],
    'Barishal': ['Agailjhara', 'Babuganj', 'Bakerganj', 'Banaripara', 'Gaurnadi'],
    // Add more as needed
  };

  let upazilaOptions = '<option disabled selected>Select Upazila</option>';
  const upazilas = districtUpazilaMap[selectedDistrict];
  
  if (upazilas) {
    upazilas.forEach(upazila => {
      upazilaOptions += `<option value="${upazila}">${upazila}</option>`;
    });
  } else {
    upazilaOptions += '<option disabled>No upazilas available (demo data)</option>';
  }

  const upazilaSelect = document.getElementById('js-upazilas');
  if (upazilaSelect) {
    upazilaSelect.innerHTML = upazilaOptions;
  }

  // Clear subsequent dropdowns
  clearDropdown('js-unions', 'Select Union');
  clearDropdown('js-villages', 'Select Village');
  
  console.log('JS District selected:', selectedDistrict);
}

/**
 * Handle JavaScript hardcoded upazila selection
 */
function jsUpazilaList() {
  const selectedUpazila = document.getElementById('js-upazilas')?.value;
  if (!selectedUpazila) return;

  // Sample unions for demo
  let unionOptions = '<option disabled selected>Select Union</option>';
  unionOptions += '<option value="Sample Union 1">Sample Union 1</option>';
  unionOptions += '<option value="Sample Union 2">Sample Union 2</option>';
  unionOptions += '<option disabled>Limited demo data available</option>';

  const unionSelect = document.getElementById('js-unions');
  if (unionSelect) {
    unionSelect.innerHTML = unionOptions;
  }

  clearDropdown('js-villages', 'Select Village');
  console.log('JS Upazila selected:', selectedUpazila);
}

/**
 * Handle JavaScript hardcoded union selection
 */
function jsUnionList() {
  const selectedUnion = document.getElementById('js-unions')?.value;
  if (!selectedUnion) return;

  // Sample villages for demo
  let villageOptions = '<option disabled selected>Select Village</option>';
  villageOptions += '<option value="Sample Village 1">Sample Village 1</option>';
  villageOptions += '<option value="Sample Village 2">Sample Village 2</option>';
  villageOptions += '<option disabled>Limited demo data available</option>';

  const villageSelect = document.getElementById('js-villages');
  if (villageSelect) {
    villageSelect.innerHTML = villageOptions;
  }

  console.log('JS Union selected:', selectedUnion);
}

// ===== JSON FILE APPROACH =====

/**
 * Handle JSON division selection
 */
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

  // Clear subsequent dropdowns
  clearDropdown('json-upazilas', 'Select Upazila');
  clearDropdown('json-unions', 'Select Union');
  clearDropdown('json-villages', 'Select Village');
}

/**
 * Handle JSON district selection
 */
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

  // Clear subsequent dropdowns
  clearDropdown('json-unions', 'Select Union');
  clearDropdown('json-villages', 'Select Village');
  
  console.log('JSON District selected:', selectedDistrict);
}

/**
 * Handle JSON upazila selection
 */
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

/**
 * Handle JSON union selection
 */
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
          // Handle array of village names
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
    // If no villages available
    const villageSelect = document.getElementById('json-villages');
    if (villageSelect) {
      villageSelect.innerHTML = '<option disabled selected>No villages available</option>';
    }
  }

  console.log('JSON Union selected:', selectedUnion);
}

// ===== UTILITY FUNCTIONS =====

/**
 * Utility function to clear dropdown selections
 */
function clearDropdown(elementId, defaultText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = `<option disabled selected>${defaultText}</option>`;
  }
}

/**
 * Get selected values from both forms for comparison
 */
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

/**
 * Display complete address information (utility function)
 */
function showCompleteAddress() {
  const values = getSelectedValues();
  console.log('Complete Address Data:', values);
  return values;
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loadCountryData,
    jsDivisionList,
    jsDistrictList,
    jsUpazilaList,
    jsUnionList,
    jsonDivisionList,
    jsonDistrictList,
    jsonUpazilaList,
    jsonUnionList,
    getSelectedValues,
    clearDropdown,
    showCompleteAddress
  };
}
