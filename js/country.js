// Division Section select
function division_list() {
	// get value from division lists
	var diviList = document.getElementById('divisions').value;

	// set barishal division districts
	if(diviList == 'Barishal'){
		var disctList = '<option disabled selected>Select Zila</option><option value="Barguna">Barguna</option><option value="Bhola">Bhola</option><option value="Barishal">Barishal</option><option value="Jhalokati">Jhalokati</option><option value="Pirojpur">Pirojpur</option><option value="Patuakhali">Patuakhali</option>';
	}
	// set Chittagong division districts
	else if(diviList == 'Chattogram') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Bandarban">Bandarban</option><option value="Brahmanbaria">Brahmanbaria</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Coxs Bazar">Coxs Bazar</option><option value="Lakshmipur">Lakshmipur</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option>';
	}
	// set Dhaka division districts
	else if(diviList == 'Dhaka') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
	}
	// set Rajshahi division districts
	else if(diviList == 'Rajshahi') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Sirajgonj">Sirajgonj</option><option value="Bogura">Bogura</option><option value="Rajshahi">Rajshahi</option><option value="Pabna">Pabna</option><option value="Natore">Natore</option><option value="Naogaon">Naogaon</option><option value="Joypurhat">Joypurhat</option><option value="Chapainawabganj">Chapainawabganj</option>';
	}
	// set Khulna division districts
	else if(diviList == 'Khulna') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Jashore">Jashore</option><option value="Satkhira">Satkhira</option><option value="Meherpur">Meherpur</option><option value="Narail">Narail</option><option value="Chuadanga">Chuadanga</option><option value="Kushtia">Kushtia</option><option value="Khulna">Khulna</option><option value="Bagerhat">Bagerhat</option><option value="Magura">Magura</option><option value="Jhenaidah">Jhenaidah</option>';
	}
	// set Mymensingh division districts
	else if(diviList == 'Mymensingh') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Sherpur">Sherpur</option><option value="Mymensingh">Mymensingh</option><option value="Jamalpur">Jamalpur</option><option value="Netrokona">Netrokona</option>';
	}
	// set Rangpur division districts
	else if(diviList == 'Rangpur') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Kurigram">Kurigram</option><option value="Rangpur">Rangpur</option><option value="Thakurgaon">Thakurgaon</option><option value="Gaibandha">Gaibandha</option><option value="Nilphamari">Nilphamari</option><option value="Lalmonirhat">Lalmonirhat</option><option value="Dinajpur">Dinajpur</option><option value="Panchagarh">Panchagarh</option>';
	}
	// set Sylhet division districts
	else if(diviList == 'Sylhet') {
		var disctList = '<option disabled selected>Select Zila</option><option value="Sunamganj">Sunamganj</option><option value="Habiganj">Habiganj</option><option value="Sylhet">Sylhet</option><option value="Moulvibazar">Moulvibazar</option>';
	}
	//  set/send districts name to District lists from division
	document.getElementById("distr").innerHTML= disctList;
}

// Thana Section select
function zilaList(){
	var Zila_list = document.getElementById('distr').value;
	//Start Barishal Division thana List;
	if(Zila_list == 'Barguna') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Amtali">Amtali</option><option value="Barguna Sadar">Barguna Sadar</option><option value="Betagi">Betagi</option><option value="Bamna">Bamna</option><option value="Pathorghata">Pathorghata</option><option value="Taltali">Taltali</option>';
	}

	else if(Zila_list == 'Bhola') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Bhola Sadar">Bhola Sadar</option><option value="Borhanuddin">Borhanuddin</option><option value="Charfesson">Charfesson</option><option value="Doulatkhan">Doulatkhan</option><option value="Monpura">Monpura</option><option value="Tazumuddin">Tazumuddin</option><option value="Lalmohan">Lalmohan</option>';
	}
	else if(Zila_list == 'Barishal') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Barishal sadar">Barishal sadar</option><option value="Bakerganj">Bakerganj</option><option value="Babuganj">Babuganj</option><option value="Wazirpur">Wazirpur</option><option value="Banaripara">Banaripara</option><option value="Gournadi">Gournadi</option><option value="Agailjhara">Agailjhara</option><option value="Mehendiganj">Mehendiganj</option><option value="Muladi">Muladi</option><option value="Hizla">Hizla</option>';
	}
	else if(Zila_list == 'Pirojpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Pirojpur Sadar">Pirojpur Sadar</option><option value="Nazirpur">Nazirpur</option><option value="Kawkhali">Kawkhali</option><option value="Bhandaria">Bhandaria</option><option value="Mathbaria">Mathbaria</option><option value="Nesarabad">Nesarabad</option><option value="Indurkani">Indurkani</option>';
	}
	else if(Zila_list == 'Patuakhali') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Bauphal">Bauphal</option><option value="Bauphal Sadar">Bauphal Sadar</option><option value="Dumki">Dumki</option><option value="Dashmina">Dashmina</option><option value="Kalapara">Kalapara</option><option value="Mirzaganj">Mirzaganj</option><option value="Galachipa">Galachipa</option><option value="Rangabali">Rangabali</option>';
	}
	else if(Zila_list == 'Jhalokati') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Jhalokati Sadar">Jhalokati Sadar</option><option value="Kathalia">Kathalia</option><option value="Nalchity">Nalchity</option><option value="Rajapur">Rajapur</option>';
	}
// end Barishal Division thana List;

//Start Rajshahi Division thana List;
	else if(Zila_list == 'Sirajgonj') {
		var thanaList = '<option disabled selected>Select Thana</option><option value="Kazipur">Kazipur</option><option value="Belkuchi">Belkuchi</option><option value="Chauhali">Chauhali</option><option value="Sirajganj Sadar">Sirajganj Sadar</option><option value="Ullahpara">Ullahpara</option><option value="Shahjadpur">Shahjadpur</option><option value="Raiganj">Raiganj</option><option value="Kamarkhanda">Kamarkhanda</option><option value="Tarash">Tarash</option>';
	}
	else if(Zila_list == 'Bogura') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Kahaloo">Kahaloo</option><option value="Bogura Sadar">Bogura Sadar</option><option value="Shariakandi">Shariakandi</option><option value="Shajahanpur">Shajahanpur</option><option value="Dupchanchia">Dupchanchia</option><option value="Adamdighi">Adamdighi</option><option value="Nondigram">Nondigram</option><option value="Sonatala">Sonatala</option><option value="Dhunot">Dhunot</option><option value="Gabtali">Gabtali</option><option value="Sherpur">Sherpur</option><option value="Shibganj">Shibganj</option>';
	}
	else if(Zila_list == 'Rajshahi') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Paba">Paba</option><option value="Durgapur">Durgapur</option><option value="Mohonpur">Mohonpur</option><option value="Charghat">Charghat</option><option value="Puthia">Puthia</option><option value="Bagha">Bagha</option><option value="Godagari">Godagari</option><option value="Tanore">Tanore</option><option value="Bagmara">Bagmara</option>';
	}
	else if(Zila_list == 'Pabna') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Sujanagar">Sujanagar</option><option value="Ishurdi">Ishurdi</option><option value="Bhangura">Bhangura</option><option value="Pabnasadar">Pabnasadar</option><option value="Bera">Bera</option><option value="Atghoria">Atghoria</option><option value="Chatmohar">Chatmohar</option><option value="Santhia">Santhia</option><option value="Faridpur">Faridpur</option>';
	}
	else if(Zila_list == 'Natore') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Natoresadar">Natoresadar</option><option value="Singra">Singra</option><option value="Baraigram">Baraigram</option><option value="Bagatipara">Bagatipara</option><option value="Lalpur">Lalpur</option><option value="Gurudaspur">Gurudaspur</option><option value="Naldanga">Naldanga</option>';
	}
	else if(Zila_list == 'Naogaon') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Mohadevpur">Mohadevpur</option><option value="Badalgachi">Badalgachi</option><option value="Patnitala">Patnitala</option><option value="Dhamoirhat">Dhamoirhat</option><option value="Niamatpur">Niamatpur</option><option value="Manda">Manda</option><option value="Atrai">Atrai</option><option value="Raninagar">Raninagar</option><option value="Naogaonsadar">Naogaonsadar</option><option value="Porsha">Porsha</option><option value="Sapahar">Sapahar</option>';
	}
	else if(Zila_list == 'Joypurhat') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Joypurhat sadar">Joypurhat sadar</option><option value="Panchbibi">Panchbibi</option><option value="Khetlal">Khetlal</option><option value="Kalai">Kalai</option><option value="Akkelpur">Akkelpur</option>';
	}
	else if(Zila_list == 'Chapainawabganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Chapainawabganj sadar">Chapainawabganj sadar</option><option value="Gomostapur">Gomostapur</option><option value="Nachol">Nachol</option><option value="Bholahat">Bholahat</option><option value="Shibganj">Shibganj</option>';
	}
//End Rajshahi Division thana List;
//Start Chattogram Division thana List;
	else if(Zila_list == 'Bandarban') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Sadar">Sadar</option><option value="Alikadam">Alikadam</option><option value="Naikhongchhari">Naikhongchhari</option><option value="Rowangchhari">Rowangchhari</option><option value="Lama">Lama</option><option value="Ruma">Ruma</option><option value="Thanchi">Thanchi</option>';
	}
	else if(Zila_list == 'Brahmanbaria') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Brahmanbaria Sadar">Sadar</option><option value="Kasba">Kasba</option><option value="Nasirnagar">Nasirnagar</option><option value="Sarail">Sarail</option><option value="Ashuganj">Ashuganj</option><option value="Akhaura">Akhaura</option><option value="Nabinagar">Nabinagar</option><option value="Bancharampur">Bancharampur</option><option value="Bijoynagar">Bijoynagar</option>';
	}
	else if(Zila_list == 'Chandpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Haimchar">Haimchar</option><option value="Kachua">Kachua</option><option value="Shahrasti">Shahrasti</option><option value="Chadpur Sadar">Sadar</option><option value="Matlabsouth">Matlabsouth</option><option value="Hajiganj">Hajiganj</option><option value="Matlabnorth">Matlabnorth</option><option value="Faridgonj">Faridgonj</option>';
	}
	else if(Zila_list == 'Khagrachhari') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Khagrachhari Sadar">Sadar</option><option value="Dighinala">Dighinala</option><option value="Panchari">Panchari</option><option value="Laxmichhari">Laxmichhari</option><option value="Mohalchari">Mohalchari</option><option value="Manikchari">Manikchari</option><option value="Ramgarh">Ramgarh</option><option value="Matiranga">Matiranga</option><option value="Guimara">Guimara</option>';
	}
	else if(Zila_list == 'Noakhali') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Noakhali Sadar">Sadar</option><option value="Companiganj">Companiganj</option><option value="Begumganj">Begumganj</option><option value="Hatia">Hatia</option><option value="Subarnachar">Subarnachar</option><option value="Kabirhat">Kabirhat</option><option value="Senbug">Senbug</option><option value="Chatkhil">Chatkhil</option><option value="Sonaimuri">Sonaimuri</option>';
	}
	else if(Zila_list == 'Rangamati') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Rangamati Sadar">Sadar</option><option value="Kaptai">Kaptai</option><option value="Kawkhali">Kawkhali</option><option value="Baghaichari">Baghaichari</option><option value="Barkal">Barkal</option><option value="Langadu">Langadu</option><option value="Rajasthali">Rajasthali</option><option value="Belaichari">Belaichari</option><option value="Juraichari">Juraichari</option><option value="Naniarchar">Naniarchar</option>';
	}
	else if(Zila_list == 'Chattogram') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Rangunia">Rangunia</option><option value="Sitakunda">Sitakunda</option><option value="Mirsharai">Mirsharai</option><option value="Patiya">Patiya</option><option value="Sandwip">Sandwip</option><option value="Banshkhali">Banshkhali</option><option value="Boalkhali">Boalkhali</option><option value="Anwara">Anwara</option><option value="Chandanaish">Chandanaish</option><option value="Satkania">Satkania</option><option value="Lohagara">Lohagara</option><option value="Hathazari">Hathazari</option><option value="Fatikchhari">Fatikchhari</option><option value="Raozan">Raozan</option><option value="Karnafuli">Karnafuli</option>';
	}
	else if(Zila_list == 'Cumilla') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Debidwar">Debidwar</option><option value="Barura">Barura</option><option value="Brahmanpara">Brahmanpara</option><option value="Chandina">Chandina</option><option value="Chauddagram">Chauddagram</option><option value="Daudkandi">Daudkandi</option><option value="Homna">Homna</option><option value="Laksam">Laksam</option><option value="Muradnagar">Muradnagar</option><option value="Nangalkot">Nangalkot</option><option value="Cumillasadar">Cumillasadar</option><option value="Meghna">Meghna</option><option value="Monohargonj">Monohargonj</option><option value="Sadarsouth">Sadarsouth</option><option value="Titas">Titas</option><option value="Burichang">Burichang</option><option value="Lalmai">Lalmai</option>';
	}
	else if(Zila_list == 'Coxs Bazar') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Coxs Bazar Sadar">Sadar</option><option value="Chakaria">Chakaria</option><option value="Kutubdia">Kutubdia</option><option value="Ukhiya">Ukhiya</option><option value="Moheshkhali">Moheshkhali</option><option value="Pekua">Pekua</option><option value="Ramu">Ramu</option><option value="Teknaf">Teknaf</option>';
	}
	else if(Zila_list == 'Lakshmipur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Rangunia Sadar">Sadar</option><option value="Kamalnagar">Kamalnagar</option><option value="Raipur">Raipur</option><option value="Ramgati">Ramgati</option><option value="Ramganj">Ramganj</option>';
	}
	else if(Zila_list == 'Feni') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Chhagalnaiya">Chhagalnaiya</option><option value="Feni Sadar">Sadar</option><option value="Sonagazi">Sonagazi</option><option value="Fulgazi">Fulgazi</option><option value="Parshuram">Parshuram</option><option value="Daganbhuiyan">Daganbhuiyan</option>';
	}
//End Chattogram Division thana List;
//Start Dhaka Division thana List;
	else if(Zila_list == 'Dhaka') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Savar">Savar</option><option value="Dhamrai">Dhamrai</option><option value="Keraniganj">Keraniganj</option><option value="Nawabganj">Nawabganj</option><option value="Dohar">Dohar</option>';
	}
	else if(Zila_list == 'Faridpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Faridpur Sadar">Sadar</option><option value="Alfadanga">Alfadanga</option><option value="Boalmari">Boalmari</option><option value="Sadarpur">Sadarpur</option><option value="Nagarkanda">Nagarkanda</option><option value="Bhanga">Bhanga</option><option value="Charbhadrasan">Charbhadrasan</option><option value="Madhukhali">Madhukhali</option><option value="Saltha">Saltha</option>';
	}
	else if(Zila_list == 'Gazipur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Kaliganj">Kaliganj</option><option value="Kaliakair">Kaliakair</option><option value="Kapasia">Kapasia</option><option value="Gazipur Sadar">Sadar</option><option value="Sreepur">Sreepur</option>';
	}
	else if(Zila_list == 'Gopalganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Gopalganj Sadar">Sadar</option><option value="Kashiani">Kashiani</option><option value="Tungipara">Tungipara</option><option value="Kotalipara">Kotalipara</option><option value="Muksudpur">Muksudpur</option>';
	}
	else if(Zila_list == 'Kishoreganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Itna">Itna</option><option value="Katiadi">Katiadi</option><option value="Bhairab">Bhairab</option><option value="Tarail">Tarail</option><option value="Hossainpur">Hossainpur</option><option value="Pakundia">Pakundia</option><option value="Kuliarchar">Kuliarchar</option><option value="Kishoreganj sadar">Kishoreganj sadar</option><option value="Karimgonj">Karimgonj</option><option value="Bajitpur">Bajitpur</option><option value="Austagram">Austagram</option><option value="Mithamoin">Mithamoin</option><option value="Nikli">Nikli</option>';
	}
	else if(Zila_list == 'Madaripur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Madaripur Sadar">Sadar</option><option value="Shibchar">Shibchar</option><option value="Kalkini">Kalkini</option><option value="Rajoir">Rajoir</option>';
	}
	else if(Zila_list == 'Manikganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Harirampur">Harirampur</option><option value="Saturia">Saturia</option><option value="Manikganj Sadar">Sadar</option><option value="Gior">Gior</option><option value="Shibaloy">Shibaloy</option><option value="Doulatpur">Doulatpur</option><option value="Singiar">Singiar</option>';
	}
	else if(Zila_list == 'Munshiganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Munshiganj Sadar">Sadar</option><option value="Sreenagar">Sreenagar</option><option value="Sirajdikhan">Sirajdikhan</option><option value="Louhajanj">Louhajanj</option><option value="Gajaria">Gajaria</option><option value="Tongibari">Tongibari</option>';
	}
	else if(Zila_list == 'Narayanganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Narayanganj Sadar">Narayanganj Sadar</option><option value="Araihazar">Araihazar</option><option value="Bandar">Bandar</option><option value="Rupganj">Rupganj</option><option value="Sonargaon">Sonargaon</option>';
	}
	else if(Zila_list == 'Narsingdi') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Belabo">Belabo</option><option value="Monohardi">Monohardi</option><option value="Narsingdisadar">Narsingdisadar</option><option value="Palash">Palash</option><option value="Raipura">Raipura</option><option value="Shibpur">Shibpur</option>';
	}
	else if(Zila_list == 'Rajbari') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Rajbari Sadar">Sadar</option><option value="Goalanda">Goalanda</option><option value="Pangsa">Pangsa</option><option value="Baliakandi">Baliakandi</option><option value="Kalukhali">Kalukhali</option>';
	}
	else if(Zila_list == 'Shariatpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Shariatpur Sadar">Sadar</option><option value="Naria">Naria</option><option value="Zajira">Zajira</option><option value="Gosairhat">Gosairhat</option><option value="Bhedarganj">Bhedarganj</option><option value="Damudya">Damudya</option>';
	}
	else if(Zila_list == 'Tangail') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Tangail sadar">Tangail Sadar</option><option value="Basail">Basail</option><option value="Bhuapur">Bhuapur</option><option value="Delduar">Delduar</option><option value="Ghatail">Ghatail</option><option value="Gopalpur">Gopalpur</option><option value="Madhupur">Madhupur</option><option value="Mirzapur">Mirzapur</option><option value="Nagarpur">Nagarpur</option><option value="Sakhipur">Sakhipur</option><option value="Kalihati">Kalihati</option><option value="Dhanbari">Dhanbari</option>';
	}
//End Dhaka Division thana List;
//Start Khulna Division thana List;
	else if(Zila_list == 'Jashore') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Jashore Sadar">Sadar</option><option value="Manirampur">Manirampur</option><option value="Abhaynagar">Abhaynagar</option><option value="Bagherpara">Bagherpara</option><option value="Chougachha">Chougachha</option><option value="Jhikargacha">Jhikargacha</option><option value="Keshabpur">Keshabpur</option><option value="Sharsha">Sharsha</option>';
	}
	else if(Zila_list == 'Satkhira') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Assasuni">Assasuni</option><option value="Debhata">Debhata</option><option value="Kalaroa">Kalaroa</option><option value="Satkhira sadar">Satkhira Sadar</option><option value="Shyamnagar">Shyamnagar</option><option value="Tala">Tala</option><option value="Kaliganj">Kaliganj</option>';
	}
	else if(Zila_list == 'Meherpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Mujibnagar">Mujibnagar</option><option value="Meherpur sadar">Meherpur Sadar</option><option value="Gangni">Gangni</option>';
	}
	else if(Zila_list == 'Narail') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Narail sadar">Narail Sadar</option><option value="Lohagara">Lohagara</option><option value="Kalia">Kalia</option>';
	}
	else if(Zila_list == 'Chuadanga') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Chuadanga sadar">Chuadanga Sadar</option><option value="Alamdanga">Alamdanga</option><option value="Damurhuda">Damurhuda</option><option value="Jibannagar">Jibannagar</option>';
	}
	else if(Zila_list == 'Kushtia') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Kushtia sadar">Kushtia Sadar</option><option value="Kumarkhali">Kumarkhali</option><option value="Khoksa">Khoksa</option><option value="Mirpurkushtia">Mirpurkushtia</option><option value="Daulatpur">Daulatpur</option><option value="Bheramara">Bheramara</option>';
	}
	else if(Zila_list == 'Khulna') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Paikgasa">Paikgasa</option><option value="Fultola">Fultola</option><option value="Digholia">Digholia</option><option value="Rupsha">Rupsha</option><option value="Terokhada">Terokhada</option><option value="Dumuria">Dumuria</option><option value="Botiaghata">Botiaghata</option><option value="Dakop">Dakop</option><option value="Koyra">Koyra</option>';
	}
	else if(Zila_list == 'Bagerhat') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Bagerhat Sadar">Sadar</option><option value="Fakirhat">Fakirhat</option><option value="Mollahat">Mollahat</option><option value="Sarankhola">Sarankhola</option><option value="Rampal">Rampal</option><option value="Morrelganj">Morrelganj</option><option value="Kachua">Kachua</option><option value="Mongla">Mongla</option><option value="Chitalmari">Chitalmari</option>';
	}
	else if(Zila_list == 'Magura') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Shalikha">Shalikha</option><option value="Sreepur">Sreepur</option><option value="Magurasadar">Magurasadar</option><option value="Mohammadpur">Mohammadpur</option>';
	}
	else if(Zila_list == 'Jhenaidah') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Jhenaidah Sadar">Sadar</option><option value="Shailkupa">Shailkupa</option><option value="Harinakundu">Harinakundu</option><option value="Kaliganj">Kaliganj</option><option value="Kotchandpur">Kotchandpur</option><option value="Moheshpur">Moheshpur</option>';
	}
//End Khulna Division thana List;
//Start Mymensingh Division thana List;
	else if(Zila_list == 'Sherpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Sherpur sadar">Sherpur Sadar</option><option value="Nalitabari">Nalitabari</option><option value="Sreebordi">Sreebordi</option><option value="Nokla">Nokla</option><option value="Jhenaigati">Jhenaigati</option>';
	}
	else if(Zila_list == 'Mymensingh') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Fulbaria">Fulbaria</option><option value="Trishal">Trishal</option><option value="Bhaluka">Bhaluka</option><option value="Muktagacha">Muktagacha</option><option value="Mymensingh sadar">Mymensingh Sadar</option><option value="Dhobaura">Dhobaura</option><option value="Phulpur">Phulpur</option><option value="Haluaghat">Haluaghat</option><option value="Gouripur">Gouripur</option><option value="Gafargaon">Gafargaon</option><option value="Iswarganj">Iswarganj</option><option value="Nandail">Nandail</option><option value="Tarakanda">Tarakanda</option>';
	}
	else if(Zila_list == 'Jamalpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Jamalpur sadar">Jamalpur Sadar</option><option value="Melandah">Melandah</option><option value="Islampur">Islampur</option><option value="Dewangonj">Dewangonj</option><option value="Sarishabari">Sarishabari</option><option value="Madarganj">Madarganj</option><option value="Bokshiganj">Bokshiganj</option>';
	}
	else if(Zila_list == 'Netrokona') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Barhatta">Barhatta</option><option value="Durgapur">Durgapur</option><option value="Kendua">Kendua</option><option value="Atpara">Atpara</option><option value="Madan">Madan</option><option value="Khaliajuri">Khaliajuri</option><option value="Kalmakanda">Kalmakanda</option><option value="Mohongonj">Mohongonj</option><option value="Purbadhala">Purbadhala</option><option value="Netrokona sadar">Netrokona Sadar</option>';
	}
//End Mymensingh Division thana List;
//Start Rangpur Division thana List;
	else if(Zila_list == 'Kurigram') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Kurigram sadar">Kurigram Sadar</option><option value="Nageshwari">Nageshwari</option><option value="Bhurungamari">Bhurungamari</option><option value="Phulbari">Phulbari</option><option value="Rajarhat">Rajarhat</option><option value="Ulipur">Ulipur</option><option value="Chilmari">Chilmari</option><option value="Rowmari">Rowmari</option><option value="Charrajibpur">Charrajibpur</option><option value="Sadar">Sadar</option><option value="Sadar">Sadar</option>';
	}
	else if(Zila_list == 'Rangpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Rangpur sadar">Rangpur Sadar</option><option value="Gangachara">Gangachara</option><option value="Taragonj">Taragonj</option><option value="Badargonj">Badargonj</option><option value="Mithapukur">Mithapukur</option><option value="Pirgonj">Pirgonj</option><option value="Kaunia">Kaunia</option><option value="Pirgacha">Pirgacha</option>';
	}
	else if(Zila_list == 'Thakurgaon') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Thakurgaon sadar">Thakurgaon Sadar</option><option value="Pirganj">Pirganj</option><option value="Ranisankail">Ranisankail</option><option value="Haripur">Haripur</option><option value="Baliadangi">Baliadangi</option>';
	}
	else if(Zila_list == 'Gaibandha') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Sadullapur">Sadullapur</option><option value="Gaibandha sadar">Gaibandha Sadar</option><option value="Palashbari">Palashbari</option><option value="Saghata">Saghata</option><option value="Gobindaganj">Gobindaganj</option><option value="Sundarganj">Sundarganj</option><option value="Phulchari">Phulchari</option>';
	}
	else if(Zila_list == 'Nilphamari') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Syedpur">Syedpur</option><option value="Domar">Domar</option><option value="Dimla">Dimla</option><option value="Jaldhaka">Jaldhaka</option><option value="Kishorganj">Kishorganj</option><option value="Nilphamarisadar">Nilphamari Sadar</option>';
	}
	else if(Zila_list == 'Lalmonirhat') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Lalmonirhat Sadar">Sadar</option><option value="Kaliganj">Kaliganj</option><option value="Hatibandha">Hatibandha</option><option value="Patgram">Patgram</option><option value="Aditmari">Aditmari</option>';
	}
	else if(Zila_list == 'Dinajpur') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Nawabganj">Nawabganj</option><option value="Birganj">Birganj</option><option value="Ghoraghat">Ghoraghat</option><option value="Birampur">Birampur</option><option value="Parbatipur">Parbatipur</option><option value="Bochaganj">Bochaganj</option><option value="Kaharol">Kaharol</option><option value="Fulbari">Fulbari</option><option value="Dinajpur sadar">Dinajpur Sadar</option><option value="Hakimpur">Hakimpur</option><option value="Khansama">Khansama</option><option value="Birol">Birol</option><option value="Chirirbandar">Chirirbandar</option>';
	}
	else if(Zila_list == 'Panchagarh') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Panchagarh sadar">Panchagarh Sadar</option><option value="Debiganj">Debiganj</option><option value="Boda">Boda</option><option value="Atwari">Atwari</option><option value="Tetulia">Tetulia</option>';
	}
//End Rangpur Division thana List;
//Start Sylhet Division thana List;
	else if(Zila_list == 'Sunamganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Sunamganj Sadar">Sadar</option><option value="Southsunamganj">Southsunamganj</option><option value="Bishwambarpur">Bishwambarpur</option><option value="Chhatak">Chhatak</option><option value="Jagannathpur">Jagannathpur</option><option value="Dowarabazar">Dowarabazar</option><option value="Tahirpur">Tahirpur</option><option value="Dharmapasha">Dharmapasha</option><option value="Jamalganj">Jamalganj</option><option value="Shalla">Shalla</option><option value="Derai">Derai</option>';
	}
	else if(Zila_list == 'Habiganj') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Nabiganj">Nabiganj</option><option value="Bahubal">Bahubal</option><option value="Ajmiriganj">Ajmiriganj</option><option value="Baniachong">Baniachong</option><option value="Lakhai">Lakhai</option><option value="Chunarughat">Chunarughat</option><option value="Habiganj sadar">Habiganj Sadar</option><option value="Madhabpur">Madhabpur</option><option value="Shayestaganj">Shayestaganj</option>';
	}
	else if(Zila_list == 'Sylhet') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Balaganj">Balaganj</option><option value="Bishwanath">Bishwanath</option><option value="Beanibazar">Beanibazar</option><option value="Companiganj">Companiganj</option><option value="Fenchuganj">Fenchuganj</option><option value="Golapganj">Golapganj</option><option value="Gowainghat">Gowainghat</option><option value="Jaintiapur">Jaintiapur</option><option value="Kanaighat">Kanaighat</option><option value="Sylhet sadar">Sylhet Sadar</option><option value="Zakiganj">Zakiganj</option><option value="Dakshinsurma">Dakshinsurma</option><option value="Osmaninagar">Osmaninagar</option>';
	}
	else if(Zila_list == 'Moulvibazar') {
		var thanaList = '<option disabled selected>Select Upazilla</option><option value="Barlekha">Barlekha</option><option value="Kamolganj">Kamolganj</option><option value="Kulaura">Kulaura</option><option value="Moulvibazar sadar">Moulvibazar Sadar</option><option value="Rajnagar">Rajnagar</option><option value="Sreemangal">Sreemangal</option><option value="Juri">Juri</option>';
	}
//End Sylhet Division thana List;
	document.getElementById("polic_sta").innerHTML= thanaList;
}
// Union Section select
function upzilaList(){
	var upZila_list = document.getElementById('polic_sta').value;
	if(upZila_list == 'Kazipur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sonamokhi">Sonamokhi</option><option value="Kazipur">Kazipur</option><option value="Chargirish">Chargirish</option><option value="Chalitadanga">Chalitadanga</option><option value="Gondhail">Gondhail</option><option value="Khasrabari">Khasrabari</option><option value="Maijbari">Maijbari</option><option value="Natuarpara">Natuarpara</option><option value="Nishchintapur">Nishchintapur</option><option value="Subhagachha">Subhagachha</option><option value="Tekani">Tekani</option><option value="Moonsurnagar">Moonsurnagar</option>';
	}
	else if(upZila_list == 'Belkuchi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajapur">Rajapur</option><option value="Baradhul">Baradhul</option><option value="Belkuchisadar">Belkuchisadar</option><option value="Dhukuriabera">Dhukuriabera</option><option value="Doulatpur">Doulatpur</option><option value="Bhangabari">Bhangabari</option>';
	}
	else if(upZila_list == 'Chauhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baghutia">Baghutia</option><option value="Gharjan">Gharjan</option><option value="Khaskaulia">Khaskaulia</option><option value="Khaspukuria">Khaspukuria</option><option value="Omarpur">Omarpur</option><option value="Sadiachandpur">Sadiachandpur</option><option value="Sthal">Sthal</option>';
	}
	else if(upZila_list == 'Sirajganj Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bagbati">Bagbati</option><option value="Ratankandi">Ratankandi</option><option value="Bohuli">Bohuli</option><option value="Sheyalkol">Sheyalkol</option><option value="Khokshabari">Khokshabari</option><option value="Soydabad">Soydabad</option><option value="Kaliahoripur">Kaliahoripur</option><option value="Kowakhola">Kowakhola</option><option value="Mesra">Mesra</option><option value="Songacha">Songacha</option>';
	}
	else if(upZila_list == 'Ullahpara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ullaparasadar">Ullaparasadar</option><option value="Ramkrisnopur">Ramkrisnopur</option><option value="Bangala">Bangala</option><option value="Udhunia">Udhunia</option><option value="Boropangashi">Boropangashi</option><option value="Durganagar">Durganagar</option><option value="Purnimagati">Purnimagati</option><option value="Salanga">Salanga</option><option value="Hatikumrul">Hatikumrul</option><option value="Borohor">Borohor</option><option value="Ponchocroshi">Ponchocroshi</option><option value="Salo">Salo</option><option value="Mohonpur">Mohonpur</option>';
	}
	else if(upZila_list == 'Shahjadpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Beltail">Beltail</option><option value="Jalalpur">Jalalpur</option><option value="Kayempure">Kayempure</option><option value="Garadah">Garadah</option><option value="Potazia">Potazia</option><option value="Rupbati">Rupbati</option><option value="Gala">Gala</option><option value="Porzona">Porzona</option><option value="Habibullahnagar">Habibullahnagar</option><option value="Khukni">Khukni</option><option value="Koizuri">Koizuri</option><option value="Sonatoni">Sonatoni</option><option value="Narina">Narina</option>';
	}
	else if(upZila_list == 'Raiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Brommogacha">Brommogacha</option><option value="Chandaikona">Chandaikona</option><option value="Dhamainagar">Dhamainagar</option><option value="Dhangora">Dhangora</option><option value="Dhubil">Dhubil</option><option value="Ghurka">Ghurka</option><option value="Nalka">Nalka</option><option value="Pangashi">Pangashi</option><option value="Sonakhara">Sonakhara</option>';
	}
	else if(upZila_list == 'Kamarkhanda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhadraghat">Bhadraghat</option><option value="Jamtail">Jamtail</option><option value="Jhawail">Jhawail</option><option value="Roydaulatpur">Roydaulatpur</option>';
	}
	else if(upZila_list == 'Tarash'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baruhas">Baruhas</option><option value="Talam">Talam</option><option value="Soguna">Soguna</option><option value="Magurabinod">Magurabinod</option><option value="Naogaon">Naogaon</option><option value="Tarashsadar">Tarashsadar</option><option value="Madhainagar">Madhainagar</option><option value="Deshigram">Deshigram</option>';
	}
//Bogura Union List
	else if(upZila_list == 'Dhunot'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nimgachi">Nimgachi</option><option value="Kalerpara">Kalerpara</option><option value="Chikashi">Chikashi</option><option value="Gossainbari">Gossainbari</option><option value="Bhandarbari">Bhandarbari</option><option value="Gopalnagar">Gopalnagar</option><option value="Mothurapur">Mothurapur</option><option value="Chowkibari">Chowkibari</option><option value="Elangi">Elangi</option><option value="Dhunatsadar">Dhunatsadar</option>';
	}
	else if(upZila_list == 'Kahaloo'){
		var union_list = '<option disabled selected>Select Union</option><option value="Birkedar">Birkedar</option><option value="Kalai">Kalai</option><option value="Paikar">Paikar</option><option value="Murail">Murail</option><option value="Narhatta">Narhatta</option><option value="Kahaloo">Kahaloo</option><option value="Durgapur">Durgapur</option><option value="Jamgaon">Jamgaon</option><option value="Malancha">Malancha</option>';
	}
	else if(upZila_list == 'Bogura Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fapore">Fapore</option><option value="Shabgram">Shabgram</option><option value="Nishindara">Nishindara</option><option value="Erulia">Erulia</option><option value="Rajapur">Rajapur</option><option value="Shakharia">Shakharia</option><option value="Sekherkola">Sekherkola</option><option value="Gokul">Gokul</option><option value="Noongola">Noongola</option><option value="Lahiripara">Lahiripara</option><option value="Namuja">Namuja</option>';
	}
	else if(upZila_list == 'Shariakandi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sariakandisadar">Sariakandisadar</option><option value="Narchi">Narchi</option><option value="Bohail">Bohail</option><option value="Chaluabari">Chaluabari</option><option value="Chandanbaisha">Chandanbaisha</option><option value="Hatfulbari">Hatfulbari</option><option value="Hatsherpur">Hatsherpur</option><option value="Karnibari">Karnibari</option><option value="Kazla">Kazla</option><option value="Kutubpur">Kutubpur</option><option value="Kamalpur">Kamalpur</option><option value="Bhelabari">Bhelabari</option>';
	}
	else if(upZila_list == 'Shajahanpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Asekpur">Asekpur</option><option value="Madla">Madla</option><option value="Majhira">Majhira</option><option value="Aria">Aria</option><option value="Kharna">Kharna</option><option value="Khottapara">Khottapara</option><option value="Chopinagar">Chopinagar</option><option value="Amrul">Amrul</option><option value="Gohail">Gohail</option>';
	}
	else if(upZila_list == 'Dupchanchia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Zianagar">Zianagar</option><option value="Chamrul">Chamrul</option><option value="Dupchanchia">Dupchanchia</option><option value="Gunahar">Gunahar</option><option value="Gobindapur">Gobindapur</option><option value="Talora">Talora</option>';
	}
	else if(upZila_list == 'Adamdighi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chhatiangram">Chhatiangram</option><option value="Nasaratpur">Nasaratpur</option><option value="Adamdighi">Adamdighi</option><option value="Kundagram">Kundagram</option><option value="Chapapur">Chapapur</option><option value="Shantahar">Shantahar</option>';
	}
	else if(upZila_list == 'Nondigram'){
		var union_list = '<option disabled selected>Select Union</option><option value="Burail">Burail</option><option value="Nandigram">Nandigram</option><option value="Bhatra">Bhatra</option><option value="Thaltamajhgram">Thaltamajhgram</option><option value="Bhatgram">Bhatgram</option>';
	}
	else if(upZila_list == 'Sonatala'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sonatala">Sonatala</option><option value="Balua">Balua</option><option value="Zorgacha">Zorgacha</option><option value="Digdair">Digdair</option><option value="Madhupur">Madhupur</option><option value="Pakulla">Pakulla</option><option value="Tekanichukinagar">Tekanichukinagar</option>';
	}
	else if(upZila_list == 'Gabtali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baliadighi">Baliadighi</option><option value="Dakshinpara">Dakshinpara</option><option value="Durgahata">Durgahata</option><option value="Kagail">Kagail</option><option value="Sonarai">Sonarai</option><option value="Rameshwarpur">Rameshwarpur</option><option value="Naruamala">Naruamala</option><option value="Nepaltali">Nepaltali</option><option value="Gabtali">Gabtali</option><option value="Mahishaban">Mahishaban</option><option value="Nasipur">Nasipur</option>';
	}
	else if(upZila_list == 'Sherpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mirzapur">Mirzapur</option><option value="Khamarkandi">Khamarkandi</option><option value="Garidaha">Garidaha</option><option value="Kusumbi">Kusumbi</option><option value="Bishalpur">Bishalpur</option><option value="Shimabari">Shimabari</option><option value="Shahbondegi">Shahbondegi</option><option value="Khanpur">Khanpur</option><option value="Sughat">Sughat</option><option value="Bhabanipur">Bhabanipur</option>';
	}
	else if(upZila_list == 'Shibganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Moidanhatta">Moidanhatta</option><option value="Kichok">Kichok</option><option value="Atmul">Atmul</option><option value="Pirob">Pirob</option><option value="Majhihatta">Majhihatta</option><option value="Buriganj">Buriganj</option><option value="Bihar">Bihar</option><option value="Shibganj">Shibganj</option><option value="Deuly">Deuly</option><option value="Sayedpur">Sayedpur</option><option value="Mokamtala">Mokamtala</option><option value="Raynagar">Raynagar</option>';
	}
//for Rajshahi
	else if(upZila_list == 'Paba'){
		var union_list = '<option disabled selected>Select Union</option><option value="Darsanpara">Darsanpara</option><option value="Hujuripara">Hujuripara</option><option value="Damkura">Damkura</option><option value="Horipur">Horipur</option><option value="Horogram">Horogram</option><option value="Harian">Harian</option><option value="Borgachi">Borgachi</option><option value="Parila">Parila</option>';
	}
	else if(upZila_list == 'Durgapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Naopara">Naopara</option><option value="Kismatgankoir">Kismatgankoir</option><option value="Pananagar">Pananagar</option><option value="Deluabari">Deluabari</option><option value="Jhaluka">Jhaluka</option><option value="Maria">Maria</option><option value="Joynogor">Joynogor</option>';
	}
	else if(upZila_list == 'Mohonpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dhuroil">Dhuroil</option><option value="Ghasigram">Ghasigram</option><option value="Raighati">Raighati</option><option value="Mougachi">Mougachi</option><option value="Baksimoil">Baksimoil</option><option value="Jahanabad">Jahanabad</option>';
	}
	else if(upZila_list == 'Charghat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Yousufpur">Yousufpur</option><option value="Solua">Solua</option><option value="Sardah">Sardah</option><option value="Nimpara">Nimpara</option><option value="Charghat">Charghat</option><option value="Vialuxmipur">Vialuxmipur</option>';
	}
	else if(upZila_list == 'Puthia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Puthia">Puthia</option><option value="Belpukuria">Belpukuria</option><option value="Baneswar">Baneswar</option><option value="Shilmaria">Shilmaria</option><option value="Valukgachi">Valukgachi</option><option value="Jewpara">Jewpara</option>';
	}
	else if(upZila_list == 'Bagha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bajubagha">Bajubagha</option><option value="Gorgori">Gorgori</option><option value="Pakuria">Pakuria</option><option value="Monigram">Monigram</option><option value="Bausa">Bausa</option><option value="Arani">Arani</option>';
	}
	else if(upZila_list == 'Godagari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Godagari">Godagari</option><option value="Mohonpur">Mohonpur</option><option value="Pakri">Pakri</option><option value="Risikul">Risikul</option><option value="Gogram">Gogram</option><option value="Matikata">Matikata</option><option value="Dewpara">Dewpara</option><option value="Basudebpur">Basudebpur</option><option value="Asariadaha">Asariadaha</option>';
	}
	else if(upZila_list == 'Tanore'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kalma">Kalma</option><option value="Badhair">Badhair</option><option value="Panchandar">Panchandar</option><option value="Saranjai">Saranjai</option><option value="Talondo">Talondo</option><option value="Kamargaon">Kamargaon</option><option value="Chanduria">Chanduria</option>';
	}
	else if(upZila_list == 'Bagmara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gobindopara">Gobindopara</option><option value="Nordas">Nordas</option><option value="Dippur">Dippur</option><option value="Borobihanoli">Borobihanoli</option><option value="Auchpara">Auchpara</option><option value="Sreepur">Sreepur</option><option value="Basupara">Basupara</option><option value="Kacharikoalipara">Kacharikoalipara</option><option value="Suvodanga">Suvodanga</option><option value="Mariaup10">Mariaup10</option><option value="Ganipur">Ganipur</option><option value="Zhikara">Zhikara</option><option value="Gualkandi">Gualkandi</option><option value="Hamirkutsa">Hamirkutsa</option><option value="Jogipara">Jogipara</option><option value="Sonadanga">Sonadanga</option>';
	}
//for Natore
	else if(upZila_list == 'Natoresadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Brahmapur">Brahmapur</option><option value="Madhnagar">Madhnagar</option><option value="Khajura">Khajura</option><option value="Piprul">Piprul</option><option value="Biprobelghoria">Biprobelghoria</option><option value="Chhatni">Chhatni</option><option value="Tebaria">Tebaria</option><option value="Dighapatia">Dighapatia</option><option value="Luxmipurkholabaria">Luxmipurkholabaria</option><option value="Barahorispur">Barahorispur</option><option value="Kaphuria">Kaphuria</option><option value="Halsa">Halsa</option>';
	}
	else if(upZila_list == 'Singra'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sukash">Sukash</option><option value="Dahia">Dahia</option><option value="Kalam">Kalam</option><option value="Chamari">Chamari</option><option value="Hatiandaha">Hatiandaha</option><option value="Lalore">Lalore</option><option value="Sherkole">Sherkole</option><option value="Tajpur">Tajpur</option><option value="Chaugram">Chaugram</option><option value="Chhatardighi">Chhatardighi</option><option value="Ramanandakhajura">Ramanandakhajura</option><option value="Italy">Italy</option>';
	}
	else if(upZila_list == 'Baraigram'){
		var union_list = '<option disabled selected>Select Union</option><option value="Joari">Joari</option><option value="Baraigram">Baraigram</option><option value="Zonail">Zonail</option><option value="Nagor">Nagor</option><option value="Majgoan">Majgoan</option><option value="Gopalpur">Gopalpur</option><option value="Chandai">Chandai</option>';
	}
	else if(upZila_list == 'Bagatipara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Panka">Panka</option><option value="Jamnagor">Jamnagor</option><option value="Bagatipara">Bagatipara</option><option value="Dayarampur">Dayarampur</option><option value="Faguardiar">Faguardiar</option>';
	}
	else if(upZila_list == 'Lalpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Lalpur">Lalpur</option><option value="Iswardi">Iswardi</option><option value="Chongdhupoil">Chongdhupoil</option><option value="Arbab">Arbab</option><option value="Bilmaria">Bilmaria</option><option value="Duaria">Duaria</option><option value="Oalia">Oalia</option><option value="Durduria">Durduria</option><option value="Arjunpur">Arjunpur</option><option value="Kadimchilan">Kadimchilan</option>';
	}
	else if(upZila_list == 'Gurudaspur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nazirpur">Nazirpur</option><option value="Biaghat">Biaghat</option><option value="Khubjipur">Khubjipur</option><option value="Dharabarisha">Dharabarisha</option><option value="Moshindha">Moshindha</option><option value="Chapila">Chapila</option>';
	}
	else if(upZila_list == 'Naldanga'){
		var union_list = '<option disabled selected>Select Union</option><option value="Null">Null</option>';
	}
//for joypurhat
	else if(upZila_list == 'Joypurhat sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amdai">Amdai</option><option value="Bamb">Bamb</option><option value="Dogachi">Dogachi</option><option value="Puranapail">Puranapail</option><option value="Jamalpur">Jamalpur</option><option value="Chakborkat">Chakborkat</option><option value="Mohammadabad">Mohammadabad</option><option value="Dhalahar">Dhalahar</option><option value="Bhadsha">Bhadsha</option>';
	}
	else if(upZila_list == 'Panchbibi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bagjana">Bagjana</option><option value="Dharanji">Dharanji</option><option value="Aymarasulpur">Aymarasulpur</option><option value="Balighata">Balighata</option><option value="Atapur">Atapur</option><option value="Mohammadpur">Mohammadpur</option><option value="Aolai">Aolai</option><option value="Kusumba">Kusumba</option>';
	}
	else if(upZila_list == 'Khetlal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alampur">Alampur</option><option value="Borail">Borail</option><option value="Tulshiganga">Tulshiganga</option><option value="Mamudpur">Mamudpur</option><option value="Boratara">Boratara</option>';
	}
	else if(upZila_list == 'Kalai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Matrai">Matrai</option><option value="Ahammedabad">Ahammedabad</option><option value="Punot">Punot</option><option value="Zindarpur">Zindarpur</option><option value="Udaipur">Udaipur</option>';
	}
	else if(upZila_list == 'Akkelpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rukindipur">Rukindipur</option><option value="Sonamukhi">Sonamukhi</option><option value="Tilakpur">Tilakpur</option><option value="Raikali">Raikali</option><option value="Gopinathpur">Gopinathpur</option>';
	}
//for Chapainawabganj
	else if(upZila_list == 'Chapainawabganj sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alatuli">Alatuli</option><option value="Baroghoria">Baroghoria</option><option value="Moharajpur">Moharajpur</option><option value="Ranihati">Ranihati</option><option value="Baliadanga">Baliadanga</option><option value="Gobratola">Gobratola</option><option value="Jhilim">Jhilim</option><option value="Charaunupnagar">Charaunupnagar</option><option value="Debinagar">Debinagar</option><option value="Shahjahanpur">Shahjahanpur</option><option value="Islampur">Islampur</option><option value="Charbagdanga">Charbagdanga</option><option value="Narayanpur">Narayanpur</option><option value="Sundarpur">Sundarpur</option>';
	}
	else if(upZila_list == 'Gomostapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Radhanagar">Radhanagar</option><option value="Rahanpur">Rahanpur</option><option value="Boalia">Boalia</option><option value="Bangabari">Bangabari</option><option value="Parbotipur">Parbotipur</option><option value="Chowdala">Chowdala</option><option value="Gomostapur">Gomostapur</option><option value="Alinagar">Alinagar</option>';
	}
	else if(upZila_list == 'Nachol'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fhotepur">Fhotepur</option><option value="Kosba">Kosba</option><option value="Nezampur">Nezampur</option><option value="Nachol">Nachol</option>';
	}
	else if(upZila_list == 'Bholahat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bholahat">Bholahat</option><option value="Jambaria">Jambaria</option><option value="Gohalbari">Gohalbari</option><option value="Daldoli">Daldoli</option>';
	}
	else if(upZila_list == 'Shibganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Binodpur">Binodpur</option><option value="Chakkirti">Chakkirti</option><option value="Daipukuria">Daipukuria</option><option value="Dhainagar">Dhainagar</option><option value="Durlovpur">Durlovpur</option><option value="Ghorapakhia">Ghorapakhia</option><option value="Mobarakpur">Mobarakpur</option><option value="Monakasha">Monakasha</option><option value="Noyalavanga">Noyalavanga</option><option value="Panka">Panka</option><option value="Chhatrajitpur">Chhatrajitpur</option><option value="Shahabajpur">Shahabajpur</option><option value="Shyampur">Shyampur</option><option value="Kansat">Kansat</option><option value="Ujirpur">Ujirpur</option>';
	}
// for pabna
	else if(upZila_list == 'Sujanagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Vaina">Vaina</option><option value="Tantibonda">Tantibonda</option><option value="Manikhat">Manikhat</option><option value="Dulai">Dulai</option><option value="Ahammadpur">Ahammadpur</option><option value="Raninagar">Raninagar</option><option value="Satbaria">Satbaria</option><option value="Hatkhali">Hatkhali</option><option value="Nazirganj">Nazirganj</option><option value="Sagorkandi">Sagorkandi</option>';
	}	else if(upZila_list == 'Ishurdi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sara">Sara</option><option value="Pakshi">Pakshi</option><option value="Muladuli">Muladuli</option><option value="Dashuria">Dashuria</option><option value="Silimpur">Silimpur</option><option value="Sahapur">Sahapur</option><option value="Luxmikunda">Luxmikunda</option>';
	}	else if(upZila_list == 'Bhangura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhangura">Bhangura</option><option value="Khanmarich">Khanmarich</option><option value="Ashtamanisha">Ashtamanisha</option><option value="Dilpasar">Dilpasar</option><option value="Parbhangura">Parbhangura</option>';
	}	else if(upZila_list == 'Pabnasadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Maligachha">Maligachha</option><option value="Malanchi">Malanchi</option><option value="Gayeshpur">Gayeshpur</option><option value="Ataikula">Ataikula</option><option value="Chartarapur">Chartarapur</option><option value="Sadullahpur">Sadullahpur</option><option value="Bharara">Bharara</option><option value="Dogachi">Dogachi</option><option value="Hemayetpur">Hemayetpur</option><option value="Dapu">Dapu</option>';
	}	else if(upZila_list == 'Bera'){
		var union_list = '<option disabled selected>Select Union</option><option value="Haturianakalia">Haturianakalia</option><option value="Notunvarenga">Notunvarenga</option><option value="Koitola">Koitola</option><option value="Chakla">Chakla</option><option value="Jatsakhini">Jatsakhini</option><option value="Puranvarenga">Puranvarenga</option><option value="Ruppur">Ruppur</option><option value="Masumdia">Masumdia</option><option value="Dhalarchar">Dhalarchar</option>';
	}	else if(upZila_list == 'Atghoria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Majhpara">Majhpara</option><option value="Chandba">Chandba</option><option value="Debottar">Debottar</option><option value="Ekdanta">Ekdanta</option><option value="Laxshmipur">Laxshmipur</option>';
	}	else if(upZila_list == 'Chatmohar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Handial">Handial</option><option value="Chhaikola">Chhaikola</option><option value="Nimaichara">Nimaichara</option><option value="Gunaigachha">Gunaigachha</option><option value="Parshadanga">Parshadanga</option><option value="Failjana">Failjana</option><option value="Mulgram">Mulgram</option><option value="Haripur">Haripur</option><option value="Mothurapur">Mothurapur</option><option value="Bilchalan">Bilchalan</option><option value="Danthiabamangram">Danthiabamangram</option>';
	}	else if(upZila_list == 'Santhia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nagdemra">Nagdemra</option><option value="Dhulauri">Dhulauri</option><option value="Bhulbaria">Bhulbaria</option><option value="Dhopadaha">Dhopadaha</option><option value="Karamja">Karamja</option><option value="Kashinathpur">Kashinathpur</option><option value="Gaurigram">Gaurigram</option><option value="Nandanpur">Nandanpur</option><option value="Khetupara">Khetupara</option><option value="Rataiqula">Rataiqula</option>';
	}	else if(upZila_list == 'Faridpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Brilahiribari">Brilahiribari</option><option value="Pungali">Pungali</option><option value="Faridpur">Faridpur</option><option value="Hadal">Hadal</option><option value="Banwarinagar">Banwarinagar</option><option value="Demra">Demra</option>';
	}
//for Naogaon
	else if(upZila_list == 'Mohadevpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nomohadevpur">1nomohadevpur</option><option value="2nohatur">2nohatur</option><option value="3nokhajur">3nokhajur</option><option value="4nochandas">4nochandas</option><option value="6noenayetpur">6noenayetpur</option><option value="7nosofapur">7nosofapur</option><option value="8nouttargram">8nouttargram</option><option value="9nocheragpur">9nocheragpur</option><option value="10novimpur">10novimpur</option><option value="Roygon">Roygon</option>';
	}
	else if(upZila_list == 'Badalgachi'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nobadalgachi">1nobadalgachi</option><option value="2nomothurapur">2nomothurapur</option><option value="3nopaharpur">3nopaharpur</option><option value="4nomithapur">4nomithapur</option><option value="5nokola">5nokola</option><option value="6nobilashbari">6nobilashbari</option><option value="7noadhaipur">7noadhaipur</option><option value="8nobalubhara">8nobalubhara</option>';
	}
	else if(upZila_list == 'Patnitala'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nopatnitala">1nopatnitala</option><option value="2nonirmail">2nonirmail</option><option value="3nodibar">3nodibar</option><option value="4noakbarpur">4noakbarpur</option><option value="5nomatindar">5nomatindar</option><option value="6nokrishnapur">6nokrishnapur</option><option value="7nopatichrara">7nopatichrara</option><option value="8nonazipur">8nonazipur</option><option value="9noghasnagar">9noghasnagar</option><option value="10noamair">10noamair</option><option value="11noahihara">11noahihara</option>';
	}
	else if(upZila_list == 'Dhamoirhat'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nodhamoirhat">1nodhamoirhat</option><option value="3noalampur">3noalampur</option><option value="4noumar">4noumar</option><option value="5noaranagar">5noaranagar</option><option value="6nojahanpur">6nojahanpur</option><option value="7noisabpur">7noisabpur</option><option value="8nokhelna">8nokhelna</option><option value="2noagradigun">2noagradigun</option>';
	}
	else if(upZila_list == 'Niamatpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nohajinagar">1nohajinagar</option><option value="2nochandannagar">2nochandannagar</option><option value="3nobhabicha">3nobhabicha</option><option value="4noniamatpur">4noniamatpur</option><option value="5norasulpur">5norasulpur</option><option value="6noparoil">6noparoil</option><option value="7nosremantapur">7nosremantapur</option><option value="8nobahadurpur">8nobahadurpur</option>';
	}
	else if(upZila_list == 'Manda'){
		var union_list = '<option disabled selected>Select Union</option><option value="1novarsho">1novarsho</option><option value="2novalain">2novalain</option><option value="3noparanpur">3noparanpur</option><option value="4nomanda">4nomanda</option><option value="5nogoneshpur">5nogoneshpur</option><option value="6nomoinom">6nomoinom</option><option value="7noproshadpur">7noproshadpur</option><option value="8nokosomba">8nokosomba</option><option value="9notetulia">9notetulia</option><option value="10nonurullabad">10nonurullabad</option><option value="11nokalikapur">11nokalikapur</option><option value="12nokashopara">12nokashopara</option><option value="13nokoshob">13nokoshob</option><option value="14nobisnopur">14nobisnopur</option>';
	}
	else if(upZila_list == 'Atrai'){
		var union_list = '<option disabled selected>Select Union</option><option value="1noshahagola">1noshahagola</option><option value="2nobhonpara">2nobhonpara</option><option value="3noahsanganj">3noahsanganj</option><option value="4nopanchupur">4nopanchupur</option><option value="5nobisha">5nobisha</option><option value="6nomaniary">6nomaniary</option><option value="7nokalikapur">7nokalikapur</option><option value="8nohatkalupara">8nohatkalupara</option>';
	}
	else if(upZila_list == 'Raninagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nokhatteshawr">1nokhatteshawr</option><option value="2nokashimpur">2nokashimpur</option><option value="3nogona">3nogona</option><option value="4noparoil">4noparoil</option><option value="5noborgoca">5noborgoca</option><option value="6nokaligram">6nokaligram</option><option value="7noekdala">7noekdala</option><option value="8nomirat">8nomirat</option>';
	}
	else if(upZila_list == 'Naogaonsadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nobarshail">1nobarshail</option><option value="2nokritipur">2nokritipur</option><option value="3nobaktiarpur">3nobaktiarpur</option><option value="4notilakpur">4notilakpur</option><option value="5nohapaniya">5nohapaniya</option><option value="6nodubalhati">6nodubalhati</option><option value="7noboalia">7noboalia</option><option value="8nohashaigari">8nohashaigari</option><option value="9nochandipur">9nochandipur</option><option value="10nobolihar">10nobolihar</option><option value="11noshekerpur">11noshekerpur</option><option value="12noshailgachhi">12noshailgachhi</option>';
	}
	else if(upZila_list == 'Porsha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nitpur">Nitpur</option><option value="2notetulia">2notetulia</option><option value="3nochhaor">3nochhaor</option><option value="4noganguria">4noganguria</option><option value="5noghatnagar">5noghatnagar</option><option value="6nomoshidpur">6nomoshidpur</option>';
	}
	else if(upZila_list == 'Sapahar'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nosapahar">1nosapahar</option><option value="3notilna">3notilna</option><option value="4noaihai">4noaihai</option><option value="6noshironti">6noshironti</option><option value="Goala">Goala</option><option value="Patari">Patari</option>';
	}
//for Dhaka Division
//
	else if(upZila_list == 'Savar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Savar">Savar</option><option value="Birulia">Birulia</option><option value="Dhamsona">Dhamsona</option><option value="Shimulia">Shimulia</option><option value="Ashulia">Ashulia</option><option value="Yearpur">Yearpur</option><option value="Vakurta">Vakurta</option><option value="Pathalia">Pathalia</option><option value="Bongaon">Bongaon</option><option value="Kaundia">Kaundia</option><option value="Tetuljhora">Tetuljhora</option><option value="Aminbazar">Aminbazar</option>';
	}
	else if(upZila_list == 'Dhamrai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chauhat">Chauhat</option><option value="Amta">Amta</option><option value="Balia">Balia</option><option value="Jadabpur">Jadabpur</option><option value="Baisakanda">Baisakanda</option><option value="Kushura">Kushura</option><option value="Gangutia">Gangutia</option><option value="Sanora">Sanora</option><option value="Sutipara">Sutipara</option><option value="Sombhag">Sombhag</option><option value="Vararia">Vararia</option><option value="Dhamrai">Dhamrai</option><option value="Kulla">Kulla</option><option value="Rowail">Rowail</option><option value="Suapur">Suapur</option><option value="Nannar">Nannar</option>';
	}
	else if(upZila_list == 'Keraniganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Hazratpur">Hazratpur</option><option value="Kalatia">Kalatia</option><option value="Taranagar">Taranagar</option><option value="Sakta">Sakta</option><option value="Ruhitpur">Ruhitpur</option><option value="Basta">Basta</option><option value="Kalindi">Kalindi</option><option value="Zinzira">Zinzira</option><option value="Suvadda">Suvadda</option><option value="Taghoria">Taghoria</option><option value="Konda">Konda</option><option value="Aganagar">Aganagar</option>';
	}
	else if(upZila_list == 'Nawabganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shikaripara">Shikaripara</option><option value="Joykrishnapur">Joykrishnapur</option><option value="Baruakhali">Baruakhali</option><option value="Nayansree">Nayansree</option><option value="Sholla">Sholla</option><option value="Jantrail">Jantrail</option><option value="Bandura">Bandura</option><option value="Kalakopa">Kalakopa</option><option value="Bakshanagar">Bakshanagar</option><option value="Barrah">Barrah</option><option value="Kailail">Kailail</option><option value="Agla">Agla</option><option value="Galimpur">Galimpur</option><option value="Churain">Churain</option>';
	}
	else if(upZila_list == 'Dohar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nayabari">Nayabari</option><option value="Kusumhathi">Kusumhathi</option><option value="Raipara">Raipara</option><option value="Sutarpara">Sutarpara</option><option value="Narisha">Narisha</option><option value="Muksudpur">Muksudpur</option><option value="Mahmudpur">Mahmudpur</option><option value="Bilaspur">Bilaspur</option>';
	}
//
	else if(upZila_list == 'Faridpur Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ishangopalpur">Ishangopalpur</option><option value="Charmadbdia">Charmadbdia</option><option value="Aliabad">Aliabad</option><option value="Uttarchannel">Uttarchannel</option><option value="Decreerchar">Decreerchar</option><option value="Majchar">Majchar</option><option value="Krishnanagar">Krishnanagar</option><option value="Ambikapur">Ambikapur</option><option value="Kanaipur">Kanaipur</option><option value="Kaijuri">Kaijuri</option><option value="Greda">Greda</option>';
	}	else if(upZila_list == 'Alfadanga'){
		var union_list = '<option disabled selected>Select Union</option><option value="Buraich">Buraich</option><option value="Alfadanga">Alfadanga</option><option value="Tagarbanda">Tagarbanda</option><option value="Bana">Bana</option><option value="Panchuria">Panchuria</option><option value="Gopalpur">Gopalpur</option>';
	}	else if(upZila_list == 'Boalmari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Boalmari">Boalmari</option><option value="Dadpur">Dadpur</option><option value="Chatul">Chatul</option><option value="Ghoshpur">Ghoshpur</option><option value="Gunbaha">Gunbaha</option><option value="Chandpur">Chandpur</option><option value="Parameshwardi">Parameshwardi</option><option value="Satair">Satair</option><option value="Rupapat">Rupapat</option><option value="Shekhar">Shekhar</option><option value="Moyna">Moyna</option>';
	}	else if(upZila_list == 'Sadarpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charbisnopur">Charbisnopur</option><option value="Akoterchar">Akoterchar</option><option value="Charnasirpur">Charnasirpur</option><option value="Narikelbariya">Narikelbariya</option><option value="Bhashanchar">Bhashanchar</option><option value="Krishnapur">Krishnapur</option><option value="Sadarpur">Sadarpur</option><option value="Charmanair">Charmanair</option><option value="Dhaukhali">Dhaukhali</option>';
	}
	else if(upZila_list == 'Nagarkanda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charjashordi">Charjashordi</option><option value="Purapara">Purapara</option><option value="Laskardia">Laskardia</option><option value="Ramnagar">Ramnagar</option><option value="Kaichail">Kaichail</option><option value="Talma">Talma</option><option value="Fulsuti">Fulsuti</option><option value="Dangi">Dangi</option><option value="Kodaliashohidnagar">Kodaliashohidnagar</option>';
	}	else if(upZila_list == 'Bhanga'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gharua">Gharua</option><option value="Nurullagonj">Nurullagonj</option><option value="Manikdha">Manikdha</option><option value="Kawlibera">Kawlibera</option><option value="Nasirabad">Nasirabad</option><option value="Tujerpur">Tujerpur</option><option value="Algi">Algi</option><option value="Chumurdi">Chumurdi</option><option value="Kalamridha">Kalamridha</option><option value="Azimnagor">Azimnagor</option><option value="Chandra">Chandra</option><option value="Hamirdi">Hamirdi</option>';
	}	else if(upZila_list == 'Charbhadrasan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gazirtek">Gazirtek</option><option value="Charbhadrasan">Charbhadrasan</option><option value="Charharirampur">Charharirampur</option><option value="Charjahukanda">Charjahukanda</option>';
	}	else if(upZila_list == 'Madhukhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Madhukhali">Madhukhali</option><option value="Jahapur">Jahapur</option><option value="Gazna">Gazna</option><option value="Megchami">Megchami</option><option value="Raipur">Raipur</option><option value="Bagat">Bagat</option><option value="Dumain">Dumain</option><option value="Nowpara">Nowpara</option><option value="Kamarkhali">Kamarkhali</option>';
	}
	else if(upZila_list == 'Saltha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhawal">Bhawal</option><option value="Atghar">Atghar</option><option value="Mazadia">Mazadia</option><option value="Ballabhdi">Ballabhdi</option><option value="Gatti">Gatti</option><option value="Jadunandi">Jadunandi</option><option value="Ramkantapur">Ramkantapur</option><option value="Sonapur">Sonapur</option>';
	}
//
	else if(upZila_list == 'Kaliganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bahadursadi">Bahadursadi</option><option value="Baktarpur">Baktarpur</option><option value="Jamalpurnew">Jamalpurnew</option><option value="Jangalia">Jangalia</option><option value="Moktarpur">Moktarpur</option><option value="Nagari">Nagari</option><option value="Tumulia">Tumulia</option>';
	}else if(upZila_list == 'Kaliakair'){
		var union_list = '<option disabled selected>Select Union</option><option value="Atabaha">Atabaha</option><option value="Boali">Boali</option><option value="Chapair">Chapair</option><option value="Dhaliora">Dhaliora</option><option value="Fulbaria">Fulbaria</option><option value="Madhyapara">Madhyapara</option><option value="Mouchak">Mouchak</option><option value="Sutrapur">Sutrapur</option><option value="Srifaltali">Srifaltali</option>';
	}else if(upZila_list == 'Kapasia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barishaba">Barishaba</option><option value="Ghagotia">Ghagotia</option><option value="Kapasia">Kapasia</option><option value="Chandpur">Chandpur</option><option value="Targoan">Targoan</option><option value="Karihata">Karihata</option><option value="Tokh">Tokh</option><option value="Sinhasree">Sinhasree</option><option value="Durgapur">Durgapur</option><option value="Sonmania">Sonmania</option><option value="Rayed">Rayed</option>';
	}else if(upZila_list == 'Gazipur Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baria">Baria</option><option value="Basan">Basan</option><option value="Gachha">Gachha</option><option value="Kashimpur">Kashimpur</option><option value="Kayaltia">Kayaltia</option><option value="Konabari">Konabari</option><option value="Mirzapur">Mirzapur</option><option value="Pubail">Pubail</option>';
	}else if(upZila_list == 'Sreepur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barmi">Barmi</option><option value="Gazipur">Gazipur</option><option value="Gosinga">Gosinga</option><option value="Maona">Maona</option><option value="Kaoraid">Kaoraid</option><option value="Prahladpur">Prahladpur</option><option value="Rajabari">Rajabari</option><option value="Telihati">Telihati</option>';
	}
//
	else if(upZila_list == 'Gopalganj Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jalalabad">Jalalabad</option><option value="Shuktail">Shuktail</option><option value="Chandradighalia">Chandradighalia</option><option value="Gopinathpur">Gopinathpur</option><option value="Paikkandi">Paikkandi</option><option value="Urfi">Urfi</option><option value="Lotifpur">Lotifpur</option><option value="Satpar">Satpar</option><option value="Sahapur">Sahapur</option><option value="Horidaspur">Horidaspur</option><option value="Ulpur">Ulpur</option><option value="Nizra">Nizra</option><option value="Karpara">Karpara</option><option value="Durgapur">Durgapur</option><option value="Kajulia">Kajulia</option><option value="Majhigati">Majhigati</option><option value="Roghunathpur">Roghunathpur</option><option value="Gobra">Gobra</option><option value="Borashi">Borashi</option><option value="Kati">Kati</option><option value="Boultali">Boultali</option>';
	}else if(upZila_list == 'Kashiani'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kashiani">Kashiani</option><option value="Hatiara">Hatiara</option><option value="Fukura">Fukura</option><option value="Rajpat">Rajpat</option><option value="Bethuri">Bethuri</option><option value="Nijamkandi">Nijamkandi</option><option value="Sajail">Sajail</option><option value="Mamudpur">Mamudpur</option><option value="Maheshpur">Maheshpur</option><option value="Orakandia">Orakandia</option><option value="Parulia">Parulia</option><option value="Ratail">Ratail</option><option value="Puisur">Puisur</option><option value="Singa">Singa</option>';
	}else if(upZila_list == 'Tungipara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kushli">Kushli</option><option value="Gopalpur">Gopalpur</option><option value="Patgati">Patgati</option><option value="Borni">Borni</option><option value="Dumaria">Dumaria</option>';
	}else if(upZila_list == 'Kotalipara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sadullapur">Sadullapur</option><option value="Ramshil">Ramshil</option><option value="Bandhabari">Bandhabari</option><option value="Kolabari">Kolabari</option><option value="Kushla">Kushla</option><option value="Amtoli">Amtoli</option><option value="Pinjuri">Pinjuri</option><option value="Ghaghor">Ghaghor</option><option value="Radhaganj">Radhaganj</option><option value="Hiron">Hiron</option><option value="Kandi">Kandi</option>';
	}else if(upZila_list == 'Muksudpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ujani">Ujani</option><option value="Nanikhir">Nanikhir</option><option value="Dignagar">Dignagar</option><option value="Poshargati">Poshargati</option><option value="Gobindopur">Gobindopur</option><option value="Khandarpara">Khandarpara</option><option value="Bohugram">Bohugram</option><option value="Banshbaria">Banshbaria</option><option value="Vabrashur">Vabrashur</option><option value="Moharajpur">Moharajpur</option><option value="Batikamari">Batikamari</option><option value="Jalirpar">Jalirpar</option><option value="Raghdi">Raghdi</option><option value="Gohala">Gohala</option><option value="Mochna">Mochna</option><option value="Kashalia">Kashalia</option>';
	}
//
	else if(upZila_list == 'Itna'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chawganga">Chawganga</option><option value="Joysiddi">Joysiddi</option><option value="Alonjori">Alonjori</option><option value="Badla">Badla</option><option value="Boribari">Boribari</option><option value="Itna">Itna</option><option value="Mriga">Mriga</option><option value="Dhonpur">Dhonpur</option><option value="Raytoti">Raytoti</option>';
	}else if(upZila_list == 'Katiadi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Banagram">Banagram</option><option value="Shahasramdhuldia">Shahasramdhuldia</option><option value="Kargaon">Kargaon</option><option value="Chandpur">Chandpur</option><option value="Mumurdia">Mumurdia</option><option value="Acmita">Acmita</option><option value="Mosua">Mosua</option><option value="Lohajuree">Lohajuree</option><option value="Jalalpur">Jalalpur</option>';
	}else if(upZila_list == 'Bhairab'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sadekpur">Sadekpur</option><option value="Aganagar">Aganagar</option><option value="Shimulkandi">Shimulkandi</option><option value="Gajaria">Gajaria</option><option value="Kalikaprashad">Kalikaprashad</option><option value="Sreenagar">Sreenagar</option><option value="Shibpur">Shibpur</option>';
	}else if(upZila_list == 'Tarail'){
		var union_list = '<option disabled selected>Select Union</option><option value="Taljanga">Taljanga</option><option value="Rauti">Rauti</option><option value="Dhola">Dhola</option><option value="Jawar">Jawar</option><option value="Damiha">Damiha</option><option value="Digdair">Digdair</option><option value="Tarailsachail">Tarailsachail</option>';
	}else if(upZila_list == 'Hossainpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jinari">Jinari</option><option value="Gobindapur">Gobindapur</option><option value="Sidhla">Sidhla</option><option value="Araibaria">Araibaria</option><option value="Sahedal">Sahedal</option><option value="Pumdi">Pumdi</option>';
	}else if(upZila_list == 'Pakundia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jangalia">Jangalia</option><option value="Hosendi">Hosendi</option><option value="Narandi">Narandi</option><option value="Shukhia">Shukhia</option><option value="Patuavabga">Patuavabga</option><option value="Chandipasha">Chandipasha</option><option value="Charfaradi">Charfaradi</option><option value="Burudia">Burudia</option><option value="Egarasindur">Egarasindur</option><option value="Pakundia">Pakundia</option>';
	}else if(upZila_list == 'Kuliarchar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ramdi">Ramdi</option><option value="Osmanpur">Osmanpur</option><option value="Chhaysuti">Chhaysuti</option><option value="Salua">Salua</option><option value="Gobariaabdullahpur">Gobariaabdullahpur</option><option value="Faridpur">Faridpur</option>';
	}else if(upZila_list == 'Kishoreganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rashidabad">Rashidabad</option><option value="Latibabad">Latibabad</option><option value="Maizkhapan">Maizkhapan</option><option value="Mohinanda">Mohinanda</option><option value="Joshodal">Joshodal</option><option value="Bowlai">Bowlai</option><option value="Binnati">Binnati</option><option value="Maria">Maria</option><option value="Chowddoshata">Chowddoshata</option><option value="Karshakarial">Karshakarial</option><option value="Danapatuli">Danapatuli</option>';
	}else if(upZila_list == 'Karimgonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kadirjangal">Kadirjangal</option><option value="Gujadia">Gujadia</option><option value="Kiraton">Kiraton</option><option value="Barogharia">Barogharia</option><option value="Niamatpur">Niamatpur</option><option value="Dehunda">Dehunda</option><option value="Sutarpara">Sutarpara</option><option value="Gunodhar">Gunodhar</option><option value="Joyka">Joyka</option><option value="Zafrabad">Zafrabad</option><option value="Noabad">Noabad</option>';
	}else if(upZila_list == 'Bajitpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kailag">Kailag</option><option value="Pirijpur">Pirijpur</option><option value="Gazirchar">Gazirchar</option><option value="Hilochia">Hilochia</option><option value="Maijchar9">Maijchar9</option><option value="Homypur">Homypur</option><option value="Halimpur">Halimpur</option><option value="Sararchar">Sararchar</option><option value="Dilalpur">Dilalpur</option><option value="Dighirpar">Dighirpar</option><option value="Boliardi">Boliardi</option>';
	}else if(upZila_list == 'Austagram'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dewghar">Dewghar</option><option value="Kastul">Kastul</option><option value="Austagramsadar">Austagramsadar</option><option value="Bangalpara">Bangalpara</option><option value="Kalma">Kalma</option><option value="Adampur">Adampur</option><option value="Khyerpurabdullahpur">Khyerpurabdullahpur</option><option value="Purbaaustagram">Purbaaustagram</option>';
	}else if(upZila_list == 'Mithamoin'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gopdighi">Gopdighi</option><option value="Mithamoin">Mithamoin</option><option value="Dhaki">Dhaki</option><option value="Ghagra">Ghagra</option><option value="Keoarjore">Keoarjore</option><option value="Katkhal">Katkhal</option><option value="Bairati">Bairati</option>';
	}else if(upZila_list == 'Nikli'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chatirchar">Chatirchar</option><option value="Guroi">Guroi</option><option value="Jaraitala">Jaraitala</option><option value="Niklisadar">Niklisadar</option><option value="Karpasa">Karpasa</option><option value="Dampara">Dampara</option>';
	}
//
	else if(upZila_list == 'Madaripur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sirkhara">Sirkhara</option><option value="Bahadurpur">Bahadurpur</option><option value="Kunia">Kunia</option><option value="Peyarpur">Peyarpur</option><option value="Kandua">Kandua</option><option value="Mastofapur">Mastofapur</option><option value="Dudkhali">Dudkhali</option><option value="Kalikapur">Kalikapur</option><option value="Chilarchar">Chilarchar</option><option value="Panchkhola">Panchkhola</option><option value="Ghatmajhi">Ghatmajhi</option><option value="Jhaoudi">Jhaoudi</option><option value="Khoajpur">Khoajpur</option><option value="Rasti">Rasti</option><option value="Dhurail">Dhurail</option>';
	}else if(upZila_list == 'Shibchar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shibchar">Shibchar</option><option value="Ditiyakhando">Ditiyakhando</option><option value="Nilokhe">Nilokhe</option><option value="Bandarkhola">Bandarkhola</option><option value="Charjanazat">Charjanazat</option><option value="Madbarerchar">Madbarerchar</option><option value="Panchar">Panchar</option><option value="Sannasirchar">Sannasirchar</option><option value="Kathalbari">Kathalbari</option><option value="Kutubpur">Kutubpur</option><option value="Kadirpur">Kadirpur</option><option value="Vhandarikandi">Vhandarikandi</option><option value="Bahertalasouth">Bahertalasouth</option><option value="Baheratalanorth">Baheratalanorth</option><option value="Baskandi">Baskandi</option><option value="Umedpur">Umedpur</option><option value="Vhadrasion">Vhadrasion</option><option value="Shiruail">Shiruail</option><option value="Dattapara">Dattapara</option>';
	}else if(upZila_list == 'Kalkini'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alinagar">Alinagar</option><option value="Baligram">Baligram</option><option value="Basgari">Basgari</option><option value="Enayetnagor">Enayetnagor</option><option value="Chardoulatkhan">Chardoulatkhan</option><option value="Dashar">Dashar</option><option value="Gopalpur">Gopalpur</option><option value="Koyaria">Koyaria</option><option value="Kazibakai">Kazibakai</option><option value="Laxmipur">Laxmipur</option><option value="Nabogram">Nabogram</option><option value="Ramjanpur">Ramjanpur</option><option value="Shahebrampur">Shahebrampur</option><option value="Shikarmongol">Shikarmongol</option>';
	}else if(upZila_list == 'Rajoir'){
		var union_list = '<option disabled selected>Select Union</option><option value="Haridasdi-mahendrodi">Haridasdi-mahendrodi</option><option value="Kadambari">Kadambari</option><option value="Bajitpur">Bajitpur</option><option value="Amgram">Amgram</option><option value="Rajoir">Rajoir</option><option value="Khaliya">Khaliya</option><option value="Ishibpur">Ishibpur</option><option value="Badarpasa">Badarpasa</option><option value="Kabirajpur">Kabirajpur</option><option value="Hosenpur">Hosenpur</option><option value="Paikpara">Paikpara</option>';
	}
//
	else if(upZila_list == 'Harirampur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Balla">Balla</option><option value="Gala">Gala</option><option value="Chala">Chala</option><option value="Blara">Blara</option><option value="Harukandi">Harukandi</option><option value="Baira">Baira</option><option value="Ramkrishnapur">Ramkrishnapur</option><option value="Gopinathpur">Gopinathpur</option><option value="Kanchanpur">Kanchanpur</option><option value="Lacharagonj">Lacharagonj</option><option value="Sutalorie">Sutalorie</option><option value="Dhulsura">Dhulsura</option><option value="Azimnagar">Azimnagar</option>';
	}else if(upZila_list == 'Saturia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baried">Baried</option><option value="Dighulia">Dighulia</option><option value="Baliyati">Baliyati</option><option value="Dargram">Dargram</option><option value="Tilli">Tilli</option><option value="Hargaj">Hargaj</option><option value="Saturia">Saturia</option><option value="Dhankora">Dhankora</option><option value="Fukurhati">Fukurhati</option>';
	}else if(upZila_list == 'Manikganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Betilamitara">Betilamitara</option><option value="Jagir">Jagir</option><option value="Atigram">Atigram</option><option value="Dighi">Dighi</option><option value="Putile">Putile</option><option value="Hatipara">Hatipara</option><option value="Vararia">Vararia</option><option value="Nbogram">Nbogram</option><option value="Garpara">Garpara</option><option value="Krishnapur">Krishnapur</option>';
	}else if(upZila_list == 'Gior'){
		var union_list = '<option disabled selected>Select Union</option><option value="Paila">Paila</option><option value="Shingzuri">Shingzuri</option><option value="Baliyakhora">Baliyakhora</option><option value="Gior">Gior</option><option value="Bartia">Bartia</option><option value="Baniazuri">Baniazuri</option><option value="Nalee">Nalee</option>';
	}else if(upZila_list == 'Shibaloy'){
		var union_list = '<option disabled selected>Select Union</option><option value="Teota">Teota</option><option value="Utholi">Utholi</option><option value="Shibaloy">Shibaloy</option><option value="Ulayel">Ulayel</option><option value="Aruoa">Aruoa</option><option value="Mohadebpur">Mohadebpur</option><option value="Shimulia">Shimulia</option>';
	}else if(upZila_list == 'Doulatpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charkataree">Charkataree</option><option value="Bachamara">Bachamara</option><option value="Baghutia">Baghutia</option><option value="Zionpur">Zionpur</option><option value="Khalshi">Khalshi</option><option value="Chakmirpur">Chakmirpur</option><option value="Klia">Klia</option><option value="Dhamswar">Dhamswar</option>';
	}else if(upZila_list == 'Singiar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Buyra">Buyra</option><option value="Talebpur">Talebpur</option><option value="Singiar">Singiar</option><option value="Baldhara">Baldhara</option><option value="Zamsha">Zamsha</option><option value="Charigram">Charigram</option><option value="Shayesta">Shayesta</option><option value="Joymonto">Joymonto</option><option value="Dhalla">Dhalla</option><option value="Jamirta">Jamirta</option><option value="Chandhar">Chandhar</option>';
	}
//
	else if(upZila_list == 'Munshiganj Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rampal">Rampal</option><option value="Panchashar">Panchashar</option><option value="Bajrajogini">Bajrajogini</option><option value="Mohakali">Mohakali</option><option value="Charkewar">Charkewar</option><option value="Mollakandi">Mollakandi</option><option value="Adhara">Adhara</option><option value="Shiloy">Shiloy</option><option value="Banglabazar">Banglabazar</option>';
	}else if(upZila_list == 'Sreenagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baraikhali">Baraikhali</option><option value="Hashara">Hashara</option><option value="Birtara">Birtara</option><option value="Shologhor">Shologhor</option><option value="Sreenagar">Sreenagar</option><option value="Patabhog">Patabhog</option><option value="Shamshiddi">Shamshiddi</option><option value="Kolapara">Kolapara</option><option value="Vaggakol">Vaggakol</option><option value="Bagra">Bagra</option><option value="Rarikhal">Rarikhal</option><option value="Kukutia">Kukutia</option><option value="Atpara">Atpara</option><option value="Tantor">Tantor</option>';
	}else if(upZila_list == 'Sirajdikhan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chitracoat">Chitracoat</option><option value="Sekhornagar">Sekhornagar</option><option value="Rajanagar">Rajanagar</option><option value="Keyain">Keyain</option><option value="Basail">Basail</option><option value="Baluchar">Baluchar</option><option value="Latabdi">Latabdi</option><option value="Rasunia">Rasunia</option><option value="Ichhapura">Ichhapura</option><option value="Bairagadi">Bairagadi</option><option value="Malkhanagar">Malkhanagar</option><option value="Madhypara">Madhypara</option><option value="Kola">Kola</option><option value="Joyinshar">Joyinshar</option>';
	}else if(upZila_list == 'Louhajanj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Medinimandal">Medinimandal</option><option value="Kumarbhog">Kumarbhog</option><option value="Haldia">Haldia</option><option value="Kanaksar">Kanaksar</option><option value="Lohajangteotia">Lohajangteotia</option><option value="Bejgaon">Bejgaon</option><option value="Baultoli">Baultoli</option><option value="Khidirpara">Khidirpara</option><option value="Gaodia">Gaodia</option><option value="Kalma">Kalma</option>';
	}else if(upZila_list == 'Gajaria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gajaria">Gajaria</option><option value="Baushia">Baushia</option><option value="Baluakandi">Baluakandi</option><option value="Tengarchar">Tengarchar</option><option value="Hosendee">Hosendee</option><option value="Guagachia">Guagachia</option><option value="Imampur">Imampur</option>';
	}else if(upZila_list == 'Tongibari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Betka">Betka</option><option value="Abdullapur">Abdullapur</option><option value="Sonarongtongibari">Sonarongtongibari</option><option value="Autshahi">Autshahi</option><option value="Arialbaligaon">Arialbaligaon</option><option value="Dhipur">Dhipur</option><option value="Kathadiashimolia">Kathadiashimolia</option><option value="Joslong">Joslong</option><option value="Panchgaon">Panchgaon</option><option value="Kamarkhara">Kamarkhara</option><option value="Hasailbanari">Hasailbanari</option><option value="Dighirpar">Dighirpar</option>';
	}
//
	else if(upZila_list == 'Narayanganj Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alirtek">Alirtek</option><option value="Kashipur">Kashipur</option><option value="Kutubpur">Kutubpur</option><option value="Gognagar">Gognagar</option><option value="Baktaboli">Baktaboli</option><option value="Enayetnagor">Enayetnagor</option>';
	}else if(upZila_list == 'Araihazar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Satgram">Satgram</option><option value="Duptara">Duptara</option><option value="Brahammandi">Brahammandi</option><option value="Fatepur">Fatepur</option><option value="Bishnandi">Bishnandi</option><option value="Mahmudpur">Mahmudpur</option><option value="Highjadi">Highjadi</option><option value="Uchitpura">Uchitpura</option><option value="Kalapaharia">Kalapaharia</option><option value="KagkandaUP">KagkandaUP</option>';
	}else if(upZila_list == 'Bandar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Musapur">Musapur</option><option value="Modonpur">Modonpur</option><option value="Bandar">Bandar</option><option value="Dhamgar">Dhamgar</option><option value="Kolagathia">Kolagathia</option>';
	}else if(upZila_list == 'Rupganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Murapara">Murapara</option><option value="Bhulta">Bhulta</option><option value="Golakandail">Golakandail</option><option value="Daudpur">Daudpur</option><option value="Rupganj">Rupganj</option><option value="Kayetpara">Kayetpara</option><option value="Bholobo">Bholobo</option>';
	}else if(upZila_list == 'Sonargaon'){
		var union_list = '<option disabled selected>Select Union</option><option value="Pirojpur">Pirojpur</option><option value="Shambhupura">Shambhupura</option><option value="Mograpara">Mograpara</option><option value="Baidyerbazar">Baidyerbazar</option><option value="Baradi">Baradi</option><option value="Jampur">Jampur</option><option value="Noagaon">Noagaon</option><option value="Sadipur">Sadipur</option><option value="Sonmandi">Sonmandi</option><option value="Kanchpur">Kanchpur</option>';
	}
//
	else if(upZila_list == 'Belabo'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amlaba">Amlaba</option><option value="Bajnaba">Bajnaba</option><option value="Belabo">Belabo</option><option value="Binnabayd">Binnabayd</option><option value="Charuzilab">Charuzilab</option><option value="Naraynpur">Naraynpur</option><option value="Sallabad">Sallabad</option><option value="Patuli">Patuli</option><option value="Diara">Diara</option>';
	}else if(upZila_list == 'Monohardi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barachapa">Barachapa</option><option value="Chalakchar">Chalakchar</option><option value="Charmandalia">Charmandalia</option><option value="Ekduaria">Ekduaria</option><option value="Gotashia">Gotashia</option><option value="Kanchikata">Kanchikata</option><option value="Khidirpur">Khidirpur</option><option value="Shukundi">Shukundi</option><option value="Dawlatpur">Dawlatpur</option><option value="Krisnopur">Krisnopur</option><option value="Labutala">Labutala</option><option value="Chandanbari">Chandanbari</option>';
	}else if(upZila_list == 'Narsingdisadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alokbali">Alokbali</option><option value="Chardighaldi">Chardighaldi</option><option value="Chinishpur">Chinishpur</option><option value="Hajipur">Hajipur</option><option value="Karimpur">Karimpur</option><option value="Khathalia">Khathalia</option><option value="Nuralapur">Nuralapur</option><option value="Mahishasura">Mahishasura</option><option value="Meherpara">Meherpara</option><option value="Nazarpur">Nazarpur</option><option value="Paikarchar">Paikarchar</option><option value="Panchdona">Panchdona</option><option value="Silmandi">Silmandi</option><option value="Amdia">Amdia</option>';
	}else if(upZila_list == 'Palash'){
		var union_list = '<option disabled selected>Select Union</option><option value="Danga">Danga</option><option value="Charsindur">Charsindur</option><option value="Jinardi">Jinardi</option><option value="Gazaria">Gazaria</option>';
	}else if(upZila_list == 'Raipura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chanpur">Chanpur</option><option value="Alipura">Alipura</option><option value="Amirganj">Amirganj</option><option value="Adiabad">Adiabad</option><option value="Banshgari">Banshgari</option><option value="Chanderkandi">Chanderkandi</option><option value="Chararalia">Chararalia</option><option value="Charmadhua">Charmadhua</option><option value="Charsubuddi">Charsubuddi</option><option value="Daukarchar">Daukarchar</option><option value="Hairmara">Hairmara</option><option value="Maheshpur">Maheshpur</option><option value="Mirzanagar">Mirzanagar</option><option value="Mirzarchar">Mirzarchar</option><option value="Nilakhya">Nilakhya</option><option value="Palashtali">Palashtali</option><option value="Paratali">Paratali</option><option value="Sreenagar">Sreenagar</option><option value="Roypura">Roypura</option><option value="Musapur">Musapur</option><option value="Uttarbakharnagar">Uttarbakharnagar</option><option value="Marjal2">Marjal2</option>';
	}else if(upZila_list == 'Shibpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dulalpur">Dulalpur</option><option value="Joynagar">Joynagar</option><option value="Sadharchar">Sadharchar</option><option value="Masimpur">Masimpur</option><option value="Chakradha">Chakradha</option><option value="Joshar">Joshar</option><option value="Baghabo">Baghabo</option><option value="Ayubpur">Ayubpur</option><option value="Putia">Putia</option>';
	}
//
	else if(upZila_list == 'Rajbari Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mijanpur">Mijanpur</option><option value="Borat">Borat</option><option value="Chandoni">Chandoni</option><option value="Khangonj">Khangonj</option><option value="Banibaha">Banibaha</option><option value="Dadshee">Dadshee</option><option value="Mulghar">Mulghar</option><option value="Basantapur">Basantapur</option><option value="Khankhanapur">Khankhanapur</option><option value="Alipur">Alipur</option><option value="Ramkantapur">Ramkantapur</option><option value="Shahidwahabpur">Shahidwahabpur</option><option value="Panchuria">Panchuria</option><option value="Sultanpur">Sultanpur</option>';
	}else if(upZila_list == 'Goalanda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Doulatdia">Doulatdia</option><option value="Debugram">Debugram</option><option value="Uzancar">Uzancar</option><option value="Chotovakla">Chotovakla</option>';
	}else if(upZila_list == 'Pangsa'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bahadurpur">Bahadurpur</option><option value="Habashpur">Habashpur</option><option value="Jashai">Jashai</option><option value="Babupara">Babupara</option><option value="Mourat">Mourat</option><option value="Patta">Patta</option><option value="Sarisha">Sarisha</option><option value="Kalimahar">Kalimahar</option><option value="Kasbamajhail">Kasbamajhail</option><option value="Machhpara">Machhpara</option>';
	}else if(upZila_list == 'Baliakandi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Islampur">Islampur</option><option value="Baharpur">Baharpur</option><option value="Nawabpur">Nawabpur</option><option value="Narua">Narua</option><option value="Baliakandi">Baliakandi</option><option value="Janjal">Janjal</option><option value="Jamalpur">Jamalpur</option>';
	}else if(upZila_list == 'Kalukhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kalukhali">Kalukhali</option><option value="Ratandia">Ratandia</option><option value="Kalikapur">Kalikapur</option><option value="Boalia">Boalia</option><option value="Majbari">Majbari</option><option value="Madapur">Madapur</option><option value="Shawrail">Shawrail</option><option value="Mrigi">Mrigi</option>';
	}
//
	else if(upZila_list == 'Shariatpur Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Binodpur">Binodpur</option><option value="Tulasar">Tulasar</option><option value="Palong">Palong</option><option value="Domshar">Domshar</option><option value="Rudrakar">Rudrakar</option><option value="Angaria">Angaria</option><option value="Chitolia">Chitolia</option><option value="Mahmudpur">Mahmudpur</option><option value="Chikondi">Chikondi</option><option value="Chandrapur">Chandrapur</option><option value="Shulpara">Shulpara</option>';
	}else if(upZila_list == 'Naria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kedarpur">Kedarpur</option><option value="Dingamanik">Dingamanik</option><option value="Garishar">Garishar</option><option value="Nowpara">Nowpara</option><option value="Moktererchar">Moktererchar</option><option value="Charatra">Charatra</option><option value="Rajnagar">Rajnagar</option><option value="Japsa">Japsa</option><option value="Vojeshwar">Vojeshwar</option><option value="Fategongpur">Fategongpur</option><option value="Bijari">Bijari</option><option value="Vumkhara">Vumkhara</option><option value="Nashason">Nashason</option>';
	}else if(upZila_list == 'Zajira'){
		var union_list = '<option disabled selected>Select Union</option><option value="Zajirasadar">Zajirasadar</option><option value="Mulna">Mulna</option><option value="Barokandi">Barokandi</option><option value="Bilaspur">Bilaspur</option><option value="Kundarchar">Kundarchar</option><option value="Palerchar">Palerchar</option><option value="Purbanawdoba">Purbanawdoba</option><option value="Nawdoba">Nawdoba</option><option value="Shenerchar">Shenerchar</option><option value="Bknagar">Bknagar</option><option value="Barogopalpur">Barogopalpur</option><option value="Jaynagor">Jaynagor</option>';
	}else if(upZila_list == 'Gosairhat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nagerpara">Nagerpara</option><option value="Alaolpur">Alaolpur</option><option value="Kodalpur">Kodalpur</option><option value="Goshairhat">Goshairhat</option><option value="Edilpur">Edilpur</option><option value="Nalmuri">Nalmuri</option><option value="Samontasar">Samontasar</option><option value="Kuchipatti">Kuchipatti</option>';
	}else if(upZila_list == 'Bhedarganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ramvadrapur">Ramvadrapur</option><option value="Mahisar">Mahisar</option><option value="Saygaon">Saygaon</option><option value="Narayanpur">Narayanpur</option><option value="Dmkhali">Dmkhali</option><option value="Charkumaria">Charkumaria</option><option value="Sakhipur">Sakhipur</option><option value="Kachikata">Kachikata</option><option value="Northtarabunia">Northtarabunia</option><option value="Charvaga">Charvaga</option><option value="Arsinagar">Arsinagar</option><option value="Southtarabunia">Southtarabunia</option><option value="Charsensas">Charsensas</option>';
	}else if(upZila_list == 'Damudya'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shidulkura">Shidulkura</option><option value="Kaneshar">Kaneshar</option><option value="Purbadamudya">Purbadamudya</option><option value="Islampur">Islampur</option><option value="Dankati">Dankati</option><option value="Sidya">Sidya</option><option value="Darulaman">Darulaman</option>';
	}
//
	else if(upZila_list == 'Tangail sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mogra">Mogra</option><option value="Gala">Gala</option><option value="Gharinda">Gharinda</option><option value="Karatia">Karatia</option><option value="Silimpur">Silimpur</option><option value="Porabari">Porabari</option><option value="Dyenna">Dyenna</option><option value="Baghil">Baghil</option><option value="Kakua">Kakua</option><option value="Hugra">Hugra</option><option value="Katuli">Katuli</option><option value="Mahamudnagar">Mahamudnagar</option>';
	}else if(upZila_list == 'Basail'){
		var union_list = '<option disabled selected>Select Union</option><option value="Basail">Basail</option><option value="Kanchanpur">Kanchanpur</option><option value="Habla">Habla</option><option value="Kashil">Kashil</option><option value="Fulki">Fulki</option><option value="Kauljani">Kauljani</option>';
	}else if(upZila_list == 'Bhuapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Arjuna">Arjuna</option><option value="Gabshara">Gabshara</option><option value="Falda">Falda</option><option value="Gobindashi">Gobindashi</option><option value="Aloa">Aloa</option><option value="Nikrail">Nikrail</option>';
	}else if(upZila_list == 'Delduar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Deuli">Deuli</option><option value="Lauhati">Lauhati</option><option value="Patharail">Patharail</option><option value="Delduar">Delduar</option><option value="Fazilhati">Fazilhati</option><option value="Elasin">Elasin</option><option value="Atia">Atia</option><option value="Dubail">Dubail</option>';
	}else if(upZila_list == 'Ghatail'){
		var union_list = '<option disabled selected>Select Union</option><option value="Deulabari">Deulabari</option><option value="Ghatail">Ghatail</option><option value="Jamuria">Jamuria</option><option value="Lokerpara">Lokerpara</option><option value="Anehola">Anehola</option><option value="Dighalkandia">Dighalkandia</option><option value="Digar">Digar</option><option value="Deopara">Deopara</option><option value="Sandhanpur">Sandhanpur</option><option value="Rasulpur">Rasulpur</option><option value="Dhalapara">Dhalapara</option>';
	}else if(upZila_list == 'Gopalpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Hadera">Hadera</option><option value="Jhawail">Jhawail</option><option value="Nagdashimla">Nagdashimla</option><option value="Dhopakandi">Dhopakandi</option><option value="Alamnagor">Alamnagor</option><option value="Hemnagor">Hemnagor</option><option value="Mirzapur">Mirzapur</option>';
	}else if(upZila_list == 'Madhupur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alokdia">Alokdia</option><option value="Aushnara">Aushnara</option><option value="Aronkhola">Aronkhola</option><option value="Sholakuri">Sholakuri</option><option value="Golabari">Golabari</option><option value="Mirjabari">Mirjabari</option>';
	}else if(upZila_list == 'Mirzapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mahera">Mahera</option><option value="Jamurki">Jamurki</option><option value="Fatepur">Fatepur</option><option value="Banail">Banail</option><option value="Anaitara">Anaitara</option><option value="Warshi">Warshi</option><option value="Bhatram">Bhatram</option><option value="Bahuria">Bahuria</option><option value="Gorai">Gorai</option><option value="Ajgana">Ajgana</option><option value="Tarafpur">Tarafpur</option><option value="Bastail">Bastail</option><option value="Baora">Baora</option><option value="Latifpur">Latifpur</option>';
	}else if(upZila_list == 'Nagarpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bharra">Bharra</option><option value="Sahabathpur">Sahabathpur</option><option value="Goyhata">Goyhata</option><option value="Solimabad">Solimabad</option><option value="Nagorpur">Nagorpur</option><option value="Mamudnagor">Mamudnagor</option><option value="Mokna">Mokna</option><option value="Pakutia">Pakutia</option><option value="Bekrahatgram">Bekrahatgram</option><option value="Dhuburia">Dhuburia</option><option value="Bhadra">Bhadra</option><option value="Doptior">Doptior</option>';
	}else if(upZila_list == 'Sakhipur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kakrajan">Kakrajan</option><option value="Gajaria">Gajaria</option><option value="Jaduppur">Jaduppur</option><option value="Hatibandha">Hatibandha</option><option value="Kalia">Kalia</option><option value="Dariapur">Dariapur</option><option value="Kalmegha">Kalmegha</option><option value="Baharatoil">Baharatoil</option>';
	}else if(upZila_list == 'Kalihati'){
		var union_list = '<option disabled selected>Select Union</option><option value="Durgapur">Durgapur</option><option value="Birbashinda">Birbashinda</option><option value="Narandia">Narandia</option><option value="Shahadebpur">Shahadebpur</option><option value="Kokdahara">Kokdahara</option><option value="Balla">Balla</option><option value="Salla">Salla</option><option value="Salla">Salla</option><option value="Nagbari">Nagbari</option><option value="Bangra">Bangra</option><option value="Paikora">Paikora</option><option value="Dashokia">Dashokia</option><option value="Parkhi">Parkhi</option><option value="Gohaliabari">Gohaliabari</option>';
	}else if(upZila_list == 'Dhanbari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dhopakhali">Dhopakhali</option><option value="Paiska">Paiska</option><option value="Mushuddi">Mushuddi</option><option value="Bolibodrow">Bolibodrow</option><option value="Birtara">Birtara</option><option value="Baniajan">Baniajan</option><option value="Jadunathpur">Jadunathpur</option>';
	}

	else if(upZila_list == 'Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajbila">Rajbila</option><option value="Tongkaboty">Tongkaboty</option><option value="Suwalok">Suwalok</option><option value="Bandarbansadar">Bandarbansadar</option><option value="Kuhalong">Kuhalong</option>';
	}else if(upZila_list == 'Alikadam'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alikadamsadar">Alikadamsadar</option><option value="Chwekhyong">Chwekhyong</option>';
	}else if(upZila_list == 'Naikhongchhari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Naikhyongcharisadar">Naikhyongcharisadar</option><option value="Gumdhum">Gumdhum</option><option value="Baishari">Baishari</option><option value="Sonaychari">Sonaychari</option><option value="Duwchari">Duwchari</option>';
	}else if(upZila_list == 'Rowangchhari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rowangcharisadar">Rowangcharisadar</option><option value="Taracha">Taracha</option><option value="Alekyong">Alekyong</option><option value="Nawapotong">Nawapotong</option>';
	}else if(upZila_list == 'Lama'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gajalia">Gajalia</option><option value="Lamasadar">Lamasadar</option><option value="Fasiakhali">Fasiakhali</option><option value="Fythong">Fythong</option><option value="Rupushipara">Rupushipara</option><option value="Sarai">Sarai</option><option value="Aziznagar">Aziznagar</option>';
	}else if(upZila_list == 'Ruma'){
		var union_list = '<option disabled selected>Select Union</option><option value="Paind">Paind</option><option value="Rumasadar">Rumasadar</option><option value="Ramakreprangsa">Ramakreprangsa</option><option value="Galanggya">Galanggya</option>';
	}else if(upZila_list == 'Thanchi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Remakre">Remakre</option><option value="Tind">Tind</option><option value="Thanchisadar">Thanchisadar</option><option value="Balipara">Balipara</option>';
	}
//
	else if(upZila_list == 'Brahmanbaria Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Basudeb">Basudeb</option><option value="Machihata">Machihata</option><option value="Sultanpur">Sultanpur</option><option value="Ramrail">Ramrail</option><option value="Sadekpur">Sadekpur</option><option value="Talsahar">Talsahar</option><option value="Natais">Natais</option><option value="Natain">Natain</option><option value="Shuhilpur">Shuhilpur</option><option value="Bodhal">Bodhal</option><option value="Majlishpur">Majlishpur</option>';
	}else if(upZila_list == 'Kasba'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mulagram">Mulagram</option><option value="Mehari">Mehari</option><option value="Badair ">Badair</option><option value="Kharera">Kharera</option><option value="Benauty">Benauty</option><option value="Gopinathpur">Gopinathpur</option><option value="Kasbaw">Kasbaw</option><option value="Kuti">Kuti</option><option value="Kayempur">Kayempur</option><option value="Bayek">Bayek</option>';
	}else if(upZila_list == 'Nasirnagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chatalpar">Chatalpar</option><option value="Bhalakut">Bhalakut</option><option value="Kunda">Kunda</option><option value="Goalnagar">Goalnagar</option><option value="Nasirnagar">Nasirnagar</option><option value="Burishwar">Burishwar</option><option value="Fandauk">Fandauk</option><option value="Goniauk">Goniauk</option><option value="Chapartala">Chapartala</option><option value="Dharnondol">Dharnondol</option><option value="Haripur">Haripur</option><option value="Purbabhag">Purbabhag</option><option value="Gokarna">Gokarna</option>';
	}else if(upZila_list == 'Sarail'){
		var union_list = '<option disabled selected>Select Union</option><option value="Auraol">Auraol</option><option value="Pakshimuul">Pakshimuul</option><option value="Chunta">Chunta</option><option value="Kalikaccha">Kalikaccha</option><option value="Panishor">Panishor</option><option value="Sarail">Sarail</option><option value="Noagoun">Noagoun</option><option value="Shahajadapur">Shahajadapur</option><option value="Shahbazpur">Shahbazpur</option>';
	}else if(upZila_list == 'Ashuganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ashuganj">Ashuganj</option><option value="Charchartala">Charchartala</option><option value="Durgapur">Durgapur</option><option value="Araishidha">Araishidha</option><option value="Talshaharw">Talshaharw</option><option value="Sarifpur">Sarifpur</option><option value="Lalpur">Lalpur</option><option value="Tarua">Tarua</option>';
	}else if(upZila_list == 'Akhaura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Monionda">Monionda</option><option value="Dharkhar">Dharkhar</option><option value="Mogra">Mogra</option><option value="Akhauran">Akhauran</option><option value="Akhauras">Akhauras</option>';
	}else if(upZila_list == 'Nabinagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barail">Barail</option><option value="Birgaon">Birgaon</option><option value="Krishnanagar">Krishnanagar</option><option value="Nathghar">Nathghar</option><option value="Biddayakut">Biddayakut</option><option value="Nabinagare">Nabinagare</option><option value="Nabinagarw">Nabinagarw</option><option value="Bitghar">Bitghar</option><option value="Shibpur">Shibpur</option><option value="Sreerampur">Sreerampur</option><option value="Jinudpur">Jinudpur</option><option value="Laurfatehpur">Laurfatehpur</option><option value="Ibrahimpur">Ibrahimpur</option><option value="Satmura">Satmura</option><option value="Rasullabad">Rasullabad</option><option value="Shamogram">Shamogram</option><option value="Barikandi">Barikandi</option><option value="Salimganj">Salimganj</option><option value="Ratanpur">Ratanpur</option><option value="Kaitalan">Kaitalan</option><option value="Kaitalas">Kaitalas</option>';
	}else if(upZila_list == 'Bancharampur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tazkhali">Tazkhali</option><option value="Pahariyakandi">Pahariyakandi</option><option value="Dariadulat">Dariadulat</option><option value="Sonarampur">Sonarampur</option><option value="Darikandi">Darikandi</option><option value="Saifullyakandi">Saifullyakandi</option><option value="Bancharampur">Bancharampur</option><option value="Ayabpur">Ayabpur</option><option value="Fardabad">Fardabad</option><option value="Rupushdi">Rupushdi</option><option value="Salimabad">Salimabad</option><option value="Ujanchar">Ujanchar</option><option value="Manikpur">Manikpur</option>';
	}else if(upZila_list == 'Bijoynagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhudanty">Bhudanty</option><option value="Chandura">Chandura</option><option value="Ichapura">Ichapura</option><option value="Champaknagar">Champaknagar</option><option value="Harashpur">Harashpur</option><option value="Pattan">Pattan</option><option value="Singerbil">Singerbil</option><option value="Bishupor">Bishupor</option><option value="Charislampur">Charislampur</option><option value="Paharpur">Paharpur</option>';
	}
//
	else if(upZila_list == 'Haimchar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gazipur">Gazipur</option><option value="Algidurgapurnorth">Algidurgapurnorth</option><option value="Algidurgapursouth">Algidurgapursouth</option><option value="Nilkamal">Nilkamal</option><option value="Haimchar">Haimchar</option><option value="Charbhairabi">Charbhairabi</option>';
	}else if(upZila_list == 'Kachua'){
		var union_list = '<option disabled selected>Select Union</option><option value="Pathair">Pathair</option><option value="Bitara">Bitara</option><option value="Shohodebpureast">Shohodebpureast</option><option value="Shohodebpurwest">Shohodebpurwest</option><option value="Kachuanorth">Kachuanorth</option><option value="Kachuasouth">Kachuasouth</option><option value="Gohatnorth">Gohatnorth</option><option value="Kadla">Kadla</option><option value="Ashrafpur">Ashrafpur</option><option value="Gohatsouth">Gohatsouth</option><option value="Sachar">Sachar</option><option value="Koroia">Koroia</option>';
	}else if(upZila_list == 'Chandpur Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bishnapur">Bishnapur</option><option value="Ashikati">Ashikati</option><option value="Shahmahmudpur">Shahmahmudpur</option><option value="Kalyanpur">Kalyanpur</option><option value="Rampur">Rampur</option><option value="Maishadi">Maishadi</option><option value="Tarpurchandi">Tarpurchandi</option><option value="Baghadi">Baghadi</option><option value="Laxmipurmodel">Laxmipurmodel</option><option value="Hanarchar">Hanarchar</option><option value="Chandra">Chandra</option><option value="Rajrajeshwar">Rajrajeshwar</option><option value="Ibrahimpur">Ibrahimpur</option><option value="Balia">Balia</option>';
	}else if(upZila_list == 'Matlabsouth'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nayergaonnorth">Nayergaonnorth</option><option value="Nayergaonsouth">Nayergaonsouth</option><option value="Khadergaon">Khadergaon</option><option value="Narayanpur">Narayanpur</option><option value="Upadisouth">Upadisouth</option><option value="Upadinorth">Upadinorth</option>';
	}else if(upZila_list == 'Hajiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajargaonnorth">Rajargaonnorth</option><option value="Bakila">Bakila</option><option value="Kalochonorth">Kalochonorth</option><option value="Hajiganjsadar">Hajiganjsadar</option><option value="Kalochosouth">Kalochosouth</option><option value="Barkuleast">Barkuleast</option><option value="Barkulwest">Barkulwest</option><option value="Hatilaeast">Hatilaeast</option><option value="Hatilawest">Hatilawest</option><option value="Gandharbapurnorth">Gandharbapurnorth</option><option value="Gandharbapursouth">Gandharbapursouth</option>';
	}else if(upZila_list == 'Matlabnorth'){
		var union_list = '<option disabled selected>Select Union</option><option value="Satnal">Satnal</option><option value="Banganbari">Banganbari</option><option value="Sadullapur">Sadullapur</option><option value="Durgapur">Durgapur</option><option value="Kalakanda">Kalakanda</option><option value="Mohanpur">Mohanpur</option><option value="Eklaspur">Eklaspur</option><option value="Jahirabad">Jahirabad</option><option value="Eastfatehpur">Eastfatehpur</option><option value="Westfatehpur">Westfatehpur</option><option value="Farajikandi">Farajikandi</option><option value="Islamabad">Islamabad</option><option value="Sultanabad">Sultanabad</option><option value="Gazra">Gazra</option>';
	}else if(upZila_list == 'Faridgonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Balithubawest">Balithubawest</option><option value="Balithubaeast">Balithubaeast</option><option value="Subidpureast">Subidpureast</option><option value="Subidpurwest">Subidpurwest</option><option value="Guptiwest">Guptiwest</option><option value="Guptieast">Guptieast</option><option value="Paikparanorth">Paikparanorth</option><option value="Paikparasouth">Paikparasouth</option><option value="Gobindapurnorth">Gobindapurnorth</option><option value="Gobindapursouth">Gobindapursouth</option><option value="Chardukhiaeast">Chardukhiaeast</option><option value="Chardukhiawest">Chardukhiawest</option><option value="Faridgonjsouth">Faridgonjsouth</option><option value="Rupshasouth">Rupshasouth</option><option value="Rupshanorth">Rupshanorth</option>';
/*Data bece save nay Shahrasti*/
	}else if(upZila_list == 'Shahrasti'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tamtasouth">Tamtasouth</option><option value="Tamtanorth">Tamtanorth</option><option value="Mehernorth">Mehernorth</option><option value="Mehersouth">Mehersouth</option><option value="Suchiparanorth">Suchiparanorth</option><option value="Suchiparasouth">Suchiparasouth</option><option value="Chitoshieast">Chitoshieast</option><option value="Raysreesouth">Raysreesouth</option><option value="Raysreenorth">Raysreenorth</option><option value="Chitoshiwest">Chitoshiwest</option>';
	}
//      Sujanagar
	else if(upZila_list == 'Rangunia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajanagar">Rajanagar</option><option value="Hosnabad">Hosnabad</option><option value="Swanirborrangunia">Swanirborrangunia</option><option value="Mariumnagar">Mariumnagar</option><option value="Parua">Parua</option><option value="Pomra">Pomra</option><option value="Betagi">Betagi</option><option value="Sharafbhata">Sharafbhata</option><option value="Shilok">Shilok</option><option value="Chandraghona">Chandraghona</option><option value="Kodala">Kodala</option><option value="Islampur">Islampur</option><option value="Southrajanagar">Southrajanagar</option><option value="Lalanagar">Lalanagar</option>';
	}else if(upZila_list == 'Sitakunda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kumira">Kumira</option><option value="Banshbaria">Banshbaria</option><option value="Barabkunda">Barabkunda</option><option value="Bariadyala">Bariadyala</option><option value="Muradpur">Muradpur</option><option value="Saidpur">Saidpur</option><option value="Salimpur">Salimpur</option><option value="Sonaichhari">Sonaichhari</option><option value="Bhatiari">Bhatiari</option>';
	}else if(upZila_list == 'Mirsharai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Korerhat">Korerhat</option><option value="Hinguli">Hinguli</option><option value="Jorarganj">Jorarganj</option><option value="Dhoom">Dhoom</option><option value="Osmanpur">Osmanpur</option><option value="Ichakhali">Ichakhali</option><option value="Katachhara">Katachhara</option><option value="Durgapur">Durgapur</option><option value="Mirsharai">Mirsharai</option><option value="Mithanala">Mithanala</option><option value="Maghadia">Maghadia</option><option value="Khaiyachhara">Khaiyachhara</option><option value="Mayani">Mayani</option><option value="Haitkandi">Haitkandi</option><option value="Wahedpur">Wahedpur</option><option value="Saherkhali">Saherkhali</option>';
	}else if(upZila_list == 'Patiya'){
		var union_list = '<option disabled selected>Select Union</option><option value="Asia">Asia</option><option value="Kachuai">Kachuai</option><option value="Kasiais">Kasiais</option><option value="Kusumpura">Kusumpura</option><option value="Kelishahar">Kelishahar</option><option value="Kolagaon">Kolagaon</option><option value="Kharana">Kharana</option><option value="Charpatharghata">Charpatharghata</option><option value="Charlakshya">Charlakshya</option><option value="Chanhara">Chanhara</option><option value="Janglukhain">Janglukhain</option><option value="Jiri">Jiri</option><option value="Juldha">Juldha</option><option value="Dakhinbhurshi">Dakhinbhurshi</option><option value="Dhalghat">Dhalghat</option><option value="Barauthan">Barauthan</option><option value="Baralia">Baralia</option><option value="Bhatikhain">Bhatikhain</option><option value="Sikalbaha">Sikalbaha</option><option value="Sobhandandi">Sobhandandi</option><option value="Habilasdwi">Habilasdwi</option><option value="Haidgaon">Haidgaon</option>';
	}else if(upZila_list == 'Sandwip'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rahmatpur">Rahmatpur</option><option value="Harispur">Harispur</option><option value="Kalapania">Kalapania</option><option value="Amanullah">Amanullah</option><option value="Santoshpur">Santoshpur</option><option value="Gachhua">Gachhua</option><option value="Bauria">Bauria</option><option value="Haramia">Haramia</option><option value="Magdhara">Magdhara</option><option value="Maitbhanga">Maitbhanga</option><option value="Sarikait">Sarikait</option><option value="Musapur">Musapur</option><option value="Azimpur">Azimpur</option><option value="Urirchar">Urirchar</option>';
	}else if(upZila_list == 'Banshkhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Pukuria">Pukuria</option><option value="Sadhanpur">Sadhanpur</option><option value="Khankhanabad">Khankhanabad</option><option value="Baharchhara">Baharchhara</option><option value="Kalipur">Kalipur</option><option value="Bailchhari">Bailchhari</option><option value="Katharia">Katharia</option><option value="Saral">Saral</option><option value="Silk">Silk</option><option value="Chambal">Chambal</option><option value="Gandamara">Gandamara</option><option value="Sekherkhil">Sekherkhil</option><option value="Puichhari">Puichhari</option><option value="Chhanua">Chhanua</option>';
	}else if(upZila_list == 'Boalkhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kandhurkhil">Kandhurkhil</option><option value="Pashchimgamdandi">Pashchimgamdandi</option><option value="Purbagomdandi">Purbagomdandi</option><option value="Sakpura">Sakpura</option><option value="Saroatali">Saroatali</option><option value="Popadia">Popadia</option><option value="Charandwi">Charandwi</option><option value="Sreepurkharandwi">Sreepurkharandwi</option><option value="Amuchia">Amuchia</option><option value="Ahlakaraldenga">Ahlakaraldenga</option>';
	}else if(upZila_list == 'Anwara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Boirag">Boirag</option><option value="Barasat">Barasat</option><option value="Raipur">Raipur</option><option value="Battali">Battali</option><option value="Barumchara">Barumchara</option><option value="Baroakhan">Baroakhan</option><option value="Anwara">Anwara</option><option value="Chatari">Chatari</option><option value="Paraikora">Paraikora</option><option value="Haildhar">Haildhar</option><option value="Juidandi">Juidandi</option>';
	}else if(upZila_list == 'Chandanaish'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kanchanabad">Kanchanabad</option><option value="Joara">Joara</option><option value="Barkal">Barkal</option><option value="Barama">Barama</option><option value="Bailtali">Bailtali</option><option value="Satbaria">Satbaria</option><option value="Hashimpur">Hashimpur</option><option value="Dohazari">Dohazari</option><option value="Dhopachhari">Dhopachhari</option>';
	}else if(upZila_list == 'Satkania'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charati">Charati</option><option value="Khagaria">Khagaria</option><option value="Nalua">Nalua</option><option value="Kanchana">Kanchana</option><option value="Amilaisi">Amilaisi</option><option value="Eochiai">Eochiai</option><option value="Madarsa">Madarsa</option><option value="Dhemsa">Dhemsa</option><option value="Paschimdhemsa">Paschimdhemsa</option><option value="Keochia">Keochia</option><option value="Kaliais">Kaliais</option><option value="Bazalia">Bazalia</option><option value="Puranagar">Puranagar</option><option value="Sadaha">Sadaha</option><option value="Satkania">Satkania</option><option value="Sonakania">Sonakania</option>';
	}else if(upZila_list == 'Lohagara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Padua">Padua</option><option value="Barahatia">Barahatia</option><option value="Amirabad">Amirabad</option><option value="Charamba">Charamba</option><option value="Kalauzan">Kalauzan</option><option value="Lohagara">Lohagara</option><option value="Putibila">Putibila</option><option value="Chunati">Chunati</option><option value="Adhunagar">Adhunagar</option>';
	}else if(upZila_list == 'Hathazari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Farhadabad">Farhadabad</option><option value="Dhalai">Dhalai</option><option value="Nangolmora">Nangolmora</option><option value="Gomanmordan">Gomanmordan</option><option value="Chipatali">Chipatali</option><option value="Mekhal">Mekhal</option><option value="Garduara">Garduara</option><option value="Fathepur">Fathepur</option><option value="Chikondandi">Chikondandi</option><option value="Uttarmadrasha">Uttarmadrasha</option><option value="Dakkinmadrasha">Dakkinmadrasha</option><option value="Sikarpur">Sikarpur</option><option value="Budirchar">Budirchar</option><option value="Hathazari">Hathazari</option>';
	}else if(upZila_list == 'Fatikchhari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dharmapur">Dharmapur</option><option value="Baganbazar">Baganbazar</option><option value="Dantmara">Dantmara</option><option value="Narayanhat">Narayanhat</option><option value="Bhujpur">Bhujpur</option><option value="Harualchari">Harualchari</option><option value="Paindong">Paindong</option><option value="Kanchannagor">Kanchannagor</option><option value="Sunderpur">Sunderpur</option><option value="Suabil">Suabil</option><option value="Abdullapur">Abdullapur</option><option value="Samitirhat">Samitirhat</option><option value="Jafathagar">Jafathagar</option><option value="Bokhtapur">Bokhtapur</option><option value="Roshangiri">Roshangiri</option><option value="Nanupur">Nanupur</option><option value="Lelang">Lelang</option><option value="Daulatpur">Daulatpur</option>';
	}else if(upZila_list == 'Raozan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Raozan">Raozan</option><option value="Bagoan">Bagoan</option><option value="Binajuri">Binajuri</option><option value="Chikdair">Chikdair</option><option value="Dabua">Dabua</option><option value="Purbagujra">Purbagujra</option><option value="Paschimgujra">Paschimgujra</option><option value="Gohira">Gohira</option><option value="Holdia">Holdia</option><option value="Kodolpur">Kodolpur</option><option value="Noapara">Noapara</option><option value="Pahartali">Pahartali</option><option value="Urkirchar">Urkirchar</option><option value="Nowajushpur">Nowajushpur</option>';
	}else if(upZila_list == 'Karnafuli'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charpatharghata">Charpatharghata</option><option value="Charlakshya">Charlakshya</option><option value="Juldha">Juldha</option><option value="Barauthan">Barauthan</option><option value="Sikalbaha">Sikalbaha</option>';
	}

	else if(upZila_list == 'Debidwar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Subil">Subil</option><option value="Gunaighornorth">Gunaighornorth</option><option value="Gunaighorsouth">Gunaighorsouth</option><option value="Boroshalghor">Boroshalghor</option><option value="Rajameher">Rajameher</option><option value="Yousufpur">Yousufpur</option><option value="Rasulpur">Rasulpur</option><option value="Fatehabad">Fatehabad</option><option value="Elahabad">Elahabad</option><option value="Jafargonj">Jafargonj</option><option value="Dhampti">Dhampti</option><option value="Mohanpur">Mohanpur</option><option value="Vani">Vani</option><option value="Barkamta">Barkamta</option><option value="Sultanpur">Sultanpur</option>';
	}else if(upZila_list == 'Barura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Aganagar">Aganagar</option><option value="Bhabanipur">Bhabanipur</option><option value="Khoshbasnorth">Khoshbasnorth</option><option value="Khoshbassouth">Khoshbassouth</option><option value="Jhalam">Jhalam</option><option value="Chitodda">Chitodda</option><option value="Shilmurinorth">Shilmurinorth</option><option value="Shilmurisouth">Shilmurisouth</option><option value="Galimpur">Galimpur</option><option value="Shakpur">Shakpur</option><option value="Bhaukshar">Bhaukshar</option><option value="Adda">Adda</option><option value="Adra">Adra</option><option value="Payalgacha">Payalgacha</option><option value="Laxmipur">Laxmipur</option>';
	}else if(upZila_list == 'Brahmanpara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shidli">Shidli</option><option value="Chandla">Chandla</option><option value="Shashidal">Shashidal</option><option value="Dulalpurup2">Dulalpurup2</option><option value="Brahmanparasadar">Brahmanparasadar</option><option value="Shahebabad">Shahebabad</option><option value="Malapara">Malapara</option><option value="Madhabpur">Madhabpur</option>';
	}else if(upZila_list == 'Chandina'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shuhilpur">Shuhilpur</option><option value="Bataghashi">Bataghashi</option><option value="Joag">Joag</option><option value="Borcarai">Borcarai</option><option value="Madhaiya">Madhaiya</option><option value="Dollainowabpur">Dollainowabpur</option><option value="Mohichial">Mohichial</option><option value="Gollai">Gollai</option><option value="Keronkhal">Keronkhal</option><option value="Maijkhar">Maijkhar</option><option value="Etberpur">Etberpur</option><option value="Barera">Barera</option><option value="Borcoit">Borcoit</option>';
	}else if(upZila_list == 'Chauddagram'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sreepur">Sreepur</option><option value="Kashinagar">Kashinagar</option><option value="Kalikapur">Kalikapur</option><option value="Shuvapur">Shuvapur</option><option value="Ghulpasha">Ghulpasha</option><option value="Moonshirhat">Moonshirhat</option><option value="Batisha">Batisha</option><option value="Kankapait">Kankapait</option><option value="Cheora">Cheora</option><option value="Jagannatdighi">Jagannatdighi</option><option value="Goonabati">Goonabati</option><option value="Alkara">Alkara</option>';
	}else if(upZila_list == 'Daudkandi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Doulotpur">Doulotpur</option><option value="Daudkandinorth">Daudkandinorth</option><option value="Eliotgonjnorth">Eliotgonjnorth</option><option value="Eliotgonjsouth">Eliotgonjsouth</option><option value="Zinglatoli">Zinglatoli</option><option value="Sundolpur">Sundolpur</option><option value="Gouripur">Gouripur</option><option value="Mohammadpurwest">Mohammadpurwest</option><option value="Mohammadpureast">Mohammadpureast</option><option value="Goalmari">Goalmari</option><option value="Maruka">Maruka</option><option value="Betessor">Betessor</option><option value="Podua">Podua</option><option value="Passgaciawest">Passgaciawest</option><option value="Baroparaup2">Baroparaup2</option>';
	}else if(upZila_list == 'Homna'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mathabanga">Mathabanga</option><option value="Gagutiea">Gagutiea</option><option value="Asadpur">Asadpur</option><option value="Chanderchor">Chanderchor</option><option value="Vashania">Vashania</option><option value="Nilokhi">Nilokhi</option><option value="Garmora">Garmora</option><option value="Joypur">Joypur</option><option value="Dulalpurup1">Dulalpurup1</option>';
	}else if(upZila_list == 'Laksam'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bakoi">Bakoi</option><option value="Mudafargonj">Mudafargonj</option><option value="Kandirpar">Kandirpar</option><option value="Gobindapur">Gobindapur</option><option value="Uttarda">Uttarda</option><option value="Laksampurba">Laksampurba</option><option value="Azgora">Azgora</option>';
	}else if(upZila_list == 'Muradnagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sreekil">Sreekil</option><option value="Akubpur">Akubpur</option><option value="Andicot">Andicot</option><option value="Purbadaireast">Purbadaireast</option><option value="Purbadairwest">Purbadairwest</option><option value="Bangaraeast">Bangaraeast</option><option value="Bangarawest">Bangarawest</option><option value="Chapitala">Chapitala</option><option value="Camalla">Camalla</option><option value="Jatrapur">Jatrapur</option><option value="Ramachandrapurnorth">Ramachandrapurnorth</option><option value="Ramachandrapursouth">Ramachandrapursouth</option><option value="Muradnagarsadar">Muradnagarsadar</option><option value="Nobipureast">Nobipureast</option><option value="Nobipurwest">Nobipurwest</option><option value="Damgar">Damgar</option><option value="Jahapur">Jahapur</option><option value="Salikandi">Salikandi</option><option value="Darura">Darura</option><option value="Paharpur">Paharpur</option><option value="Babutipara">Babutipara</option><option value="Tanki">Tanki</option>';
	}else if(upZila_list == 'Nangalkot'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bangadda">Bangadda</option><option value="Paria">Paria</option><option value="Raykot">Raykot</option><option value="Mokara">Mokara</option><option value="Makrabpur">Makrabpur</option><option value="Heshakhal">Heshakhal</option><option value="Adra">Adra</option><option value="Judda">Judda</option><option value="Dhalua">Dhalua</option><option value="Doulkha">Doulkha</option><option value="Boxgonj">Boxgonj</option><option value="Satbaria">Satbaria</option><option value="Battali">Battali</option>';
	}else if(upZila_list == 'Cumillasadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kalirbazer">Kalirbazer</option><option value="Durgapurnorth">Durgapurnorth</option><option value="Durgapursouth">Durgapursouth</option><option value="Amratoli">Amratoli</option><option value="Panchthubi">Panchthubi</option><option value="Jagannatpur">Jagannatpur</option>';
	}else if(upZila_list == 'Meghna'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chandanpur">Chandanpur</option><option value="Chalibanga">Chalibanga</option><option value="Radanagar">Radanagar</option><option value="Manikarchar">Manikarchar</option><option value="Barakanda">Barakanda</option><option value="Govindapurup1">Govindapurup1</option><option value="Luterchar">Luterchar</option><option value="Vaorkhola">Vaorkhola</option>';
	}else if(upZila_list == 'Monohargonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baishgaon">Baishgaon</option><option value="Shoroshpur">Shoroshpur</option><option value="Hasnabad">Hasnabad</option><option value="Jholamnorth">Jholamnorth</option><option value="Jholamsouth">Jholamsouth</option><option value="Moishatua">Moishatua</option><option value="Lokkhanpur">Lokkhanpur</option><option value="Khela">Khela</option><option value="Uttarhowla">Uttarhowla</option><option value="Natherpetua">Natherpetua</option><option value="Bipulashar">Bipulashar</option>';
	}else if(upZila_list == 'Sadarsouth'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chuwara">Chuwara</option><option value="Baroparaup1">Baroparaup1</option><option value="Jorkanoneast">Jorkanoneast</option><option value="Goliara">Goliara</option><option value="Jorkanonwest">Jorkanonwest</option><option value="Bagmaranorth">Bagmaranorth</option><option value="Bagmarasouth">Bagmarasouth</option><option value="Bhuloinnorth">Bhuloinnorth</option><option value="Bhuloinsouth">Bhuloinsouth</option><option value="Belgornorth">Belgornorth</option><option value="Belgorsouth">Belgorsouth</option><option value="Perulnorth">Perulnorth</option><option value="Perulsouth">Perulsouth</option><option value="Bijoypur">Bijoypur</option>';
	}else if(upZila_list == 'Titas'){
		var union_list = '<option disabled selected>Select Union</option><option value="Satani">Satani</option><option value="Jagatpur">Jagatpur</option><option value="Balorampur">Balorampur</option><option value="Karikandi">Karikandi</option><option value="Kalakandi">Kalakandi</option><option value="Vitikandi">Vitikandi</option><option value="Narayandia">Narayandia</option><option value="Zearkandi">Zearkandi</option><option value="Majidpur">Majidpur</option>';
	}else if(upZila_list == 'Burichang'){
		var union_list = '<option disabled selected>Select Union</option><option value="Moynamoti">Moynamoti</option><option value="Varella">Varella</option><option value="Mokam">Mokam</option><option value="Burichangsadar">Burichangsadar</option><option value="Bakshimul">Bakshimul</option><option value="Pirjatrapur">Pirjatrapur</option><option value="Sholonal">Sholonal</option><option value="Rajapur">Rajapur</option>';
	}else if(upZila_list == 'Lalmai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bagmaranorth">Bagmaranorth</option><option value="Bagmarasouth">Bagmarasouth</option><option value="Bhuloinnorth">Bhuloinnorth</option><option value="Bhuloinsouth">Bhuloinsouth</option><option value="Belgornorth">Belgornorth</option><option value="Belgorsouth">Belgorsouth</option><option value="Perulnorth">Perulnorth</option><option value="Perulsouth">Perulsouth</option>';
	}
//
	else if(upZila_list == 'Coxs Bazar Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Islamabad">Islamabad</option><option value="Islampur">Islampur</option><option value="Pokkhali">Pokkhali</option><option value="Jalalabad">Jalalabad</option><option value="Chowfaldandi">Chowfaldandi</option><option value="Varuakhali">Varuakhali</option><option value="Pmkhali">Pmkhali</option><option value="Khurushkhul">Khurushkhul</option><option value="Jhilong">Jhilong</option><option value="Eidgaon">Eidgaon</option>';
	}else if(upZila_list == 'Chakaria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kakhara">Kakhara</option><option value="Kaiarbil">Kaiarbil</option><option value="Konakhali">Konakhali</option><option value="Khuntakhali">Khuntakhali</option><option value="Chiringa">Chiringa</option><option value="Demusia">Demusia</option><option value="Dulahazara">Dulahazara</option><option value="Paschimbarabheola">Paschimbarabheola</option><option value="Badarkhali">Badarkhali</option><option value="Bamobilchari">Bamobilchari</option><option value="Baraitali">Baraitali</option><option value="Bheolamanikchar">Bheolamanikchar</option><option value="Saharbil">Saharbil</option><option value="Surajpurmanikpur">Surajpurmanikpur</option><option value="Harbang">Harbang</option><option value="Fashiakhali">Fashiakhali</option>';
	}else if(upZila_list == 'Kutubdia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Aliakbardeil">Aliakbardeil</option><option value="Uttardhurung">Uttardhurung</option><option value="Kaiyarbil">Kaiyarbil</option><option value="Dakshidhurung">Dakshidhurung</option><option value="Baragho">Baragho</option><option value="Lemsikhali">Lemsikhali</option>';
	}else if(upZila_list == 'Ukhiya'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajapalong">Rajapalong</option><option value="Jaliapalong">Jaliapalong</option><option value="Holdiapalong">Holdiapalong</option><option value="Ratnapalong">Ratnapalong</option><option value="Palongkhali">Palongkhali</option>';
	}else if(upZila_list == 'Moheshkhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Boramoheshkhali">Boramoheshkhali</option><option value="Chotamoheshkhali">Chotamoheshkhali</option><option value="Shaplapur">Shaplapur</option><option value="Kutubjum">Kutubjum</option><option value="Hoanak">Hoanak</option><option value="Kalarmarchhara">Kalarmarchhara</option><option value="Matarbari">Matarbari</option><option value="Dhalghata">Dhalghata</option>';
	}else if(upZila_list == 'Pekua'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ujantia">Ujantia</option><option value="Taitong">Taitong</option><option value="Pekua">Pekua</option><option value="Barabakia">Barabakia</option><option value="Magnama">Magnama</option><option value="Rajakhali">Rajakhali</option><option value="Shilkhali">Shilkhali</option>';
	}else if(upZila_list == 'Ramu'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fotekharkul">Fotekharkul</option><option value="Rajarkul">Rajarkul</option><option value="Rashidnagar">Rashidnagar</option><option value="Khuniapalong">Khuniapalong</option><option value="Eidghar">Eidghar</option><option value="Chakmarkul">Chakmarkul</option><option value="Kacchapia">Kacchapia</option><option value="Kauwarkho">Kauwarkho</option><option value="Dakkhinmithachhari">Dakkhinmithachhari</option><option value="Jouarianala">Jouarianala</option><option value="Garjoniya">Garjoniya</option>';
	}else if(upZila_list == 'Teknaf'){
		var union_list = '<option disabled selected>Select Union</option><option value="Subrang">Subrang</option><option value="Baharchara">Baharchara</option><option value="Hnila">Hnila</option><option value="Whykong">Whykong</option><option value="Saintmartin">Saintmartin</option><option value="Teknafsadar">Teknafsadar</option>';
	}
//
	else if(upZila_list == 'Rangunia Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Northhamsadi">Northhamsadi</option><option value="Southhamsadi">Southhamsadi</option><option value="Dalalbazar">Dalalbazar</option><option value="Charruhita">Charruhita</option><option value="Parbotinagar">Parbotinagar</option><option value="Bangakha">Bangakha</option><option value="Dattapara">Dattapara</option><option value="Basikpur">Basikpur</option><option value="Chandrogonj">Chandrogonj</option><option value="Nourthjoypur">Nourthjoypur</option><option value="Hazirpara">Hazirpara</option><option value="Charshahi">Charshahi</option><option value="Digli">Digli</option><option value="Laharkandi">Laharkandi</option><option value="Vobanigonj">Vobanigonj</option><option value="Kusakhali">Kusakhali</option><option value="Sakchor">Sakchor</option><option value="Tearigonj">Tearigonj</option><option value="Tumchor">Tumchor</option><option value="Charramonimohon">Charramonimohon</option><option value="Mandari">Mandari</option>';
	}else if(upZila_list == 'Kamalnagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charkalkini">Charkalkini</option><option value="Shaheberhat">Shaheberhat</option><option value="Charmartin">Charmartin</option><option value="Charfolcon">Charfolcon</option><option value="Patarirhat">Patarirhat</option><option value="Hajirhat">Hajirhat</option><option value="Charkadira">Charkadira</option><option value="Torabgonj">Torabgonj</option><option value="Charlorench">Charlorench</option>';
	}else if(upZila_list == 'Raipur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Northcharababil">Northcharababil</option><option value="Northcharbangshi">Northcharbangshi</option><option value="Charmohana">Charmohana</option><option value="Sonapur">Sonapur</option><option value="Charpata">Charpata</option><option value="Bamni">Bamni</option><option value="Southcharbangshi">Southcharbangshi</option><option value="Southcharababil">Southcharababil</option><option value="Raipur">Raipur</option><option value="Keora">Keora</option>';
	}else if(upZila_list == 'Ramgati'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charporagacha">Charporagacha</option><option value="Charbadam">Charbadam</option><option value="Charabdullah">Charabdullah</option><option value="Alxendar">Alxendar</option><option value="Charalgi">Charalgi</option><option value="Charramiz">Charramiz</option><option value="Borokheri">Borokheri</option><option value="Chargazi">Chargazi</option>';
	}else if(upZila_list == 'Ramganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kanchanpur">Kanchanpur</option><option value="Noagaon">Noagaon</option><option value="Bhadur">Bhadur</option><option value="Ichhapur">Ichhapur</option><option value="Chandipur">Chandipur</option><option value="Lamchar">Lamchar</option><option value="Darbeshpur">Darbeshpur</option><option value="Karpara">Karpara</option><option value="Bholakot">Bholakot</option><option value="Bhatra">Bhatra</option>';
	}
//
	else if(upZila_list == 'Chhagalnaiya'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mohamaya">Mohamaya</option><option value="Pathannagar">Pathannagar</option><option value="Subhapur">Subhapur</option><option value="Radhanagar">Radhanagar</option><option value="Gopal">Gopal</option>';
	}else if(upZila_list == 'Feni Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sarishadi">Sarishadi</option><option value="Panchgachia">Panchgachia</option><option value="Dhormapur">Dhormapur</option><option value="Kazirbag">Kazirbag</option><option value="Kalidah">Kalidah</option><option value="Baligaon">Baligaon</option><option value="Dholia">Dholia</option><option value="Lemua">Lemua</option><option value="Chonua">Chonua</option><option value="Motobi">Motobi</option><option value="Fazilpur">Fazilpur</option><option value="Forhadnogor">Forhadnogor</option>';
	}else if(upZila_list == 'Sonagazi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charmozlishpur">Charmozlishpur</option><option value="Bogadana">Bogadana</option><option value="Motigonj">Motigonj</option><option value="Mongolkandi">Mongolkandi</option><option value="Chardorbesh">Chardorbesh</option><option value="Chorchandia">Chorchandia</option><option value="Sonagazi">Sonagazi</option><option value="Amirabad">Amirabad</option><option value="Naba">Naba</option>';
	}else if(upZila_list == 'Parshuram'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fulgazi">Fulgazi</option><option value="Munshirhat">Munshirhat</option><option value="Dorbarpur">Dorbarpur</option><option value="Amzadhat">Amzadhat</option><option value="Anandopur">Anandopur</option><option value="Gmhat">Gmhat</option>';
	}else if(upZila_list == 'Daganbhuiyan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mizanagar">Mizanagar</option><option value="Ctholia">Ctholia</option><option value="Boxmahmmud">Boxmahmmud</option>';
	}else if(upZila_list == 'Fulgazi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mizanagar">Mizanagar</option><option value="Ctholia">Ctholia</option><option value="Boxmahmmud">Boxmahmmud</option>';
	}
//
	else if(upZila_list == 'Khagrachhari Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sadar">Sadar</option><option value="Golabari">Golabari</option><option value="Parachara">Parachara</option><option value="Kamalchari">Kamalchari</option>';
	}else if(upZila_list == 'Dighinala'){
		var union_list = '<option disabled selected>Select Union</option><option value="Merung">Merung</option><option value="Boalkhali">Boalkhali</option><option value="Kabakhali">Kabakhali</option><option value="Dighinala">Dighinala</option><option value="Babuchara">Babuchara</option>';
	}else if(upZila_list == 'Panchari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Logang">Logang</option><option value="Changi">Changi</option><option value="Panchari">Panchari</option><option value="Latiban">Latiban</option>';
	}else if(upZila_list == 'Laxmichhari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dullyatali">Dullyatali</option><option value="Barmachari">Barmachari</option><option value="Laxmichhari">Laxmichhari</option>';
	}else if(upZila_list == 'Mohalchari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhaibonchara">Bhaibonchara</option><option value="Mahalchari">Mahalchari</option><option value="Mobachari">Mobachari</option><option value="Kayanghat">Kayanghat</option><option value="Maischari">Maischari</option>';
	}else if(upZila_list == 'Manikchari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Manikchari">Manikchari</option><option value="Batnatali">Batnatali</option><option value="Jogyachola">Jogyachola</option><option value="Tintahari">Tintahari</option>';
	}else if(upZila_list == 'Ramgarh'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ramgarh">Ramgarh</option><option value="Patachara">Patachara</option><option value="Hafchari">Hafchari</option>';
	}else if(upZila_list == 'Matiranga'){
		var union_list = '<option disabled selected>Select Union</option><option value="Taindong">Taindong</option><option value="Tabalchari">Tabalchari</option><option value="Barnal">Barnal</option><option value="Gomti">Gomti</option><option value="Balchari">Balchari</option><option value="Matiranga">Matiranga</option><option value="Guimara">Guimara</option><option value="Amtali">Amtali</option>';
	}else if(upZila_list == 'Guimara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Null">Null</option>';
	}
//
	else if(upZila_list == 'Noakhali Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charmatua">Charmatua</option><option value="Dadpur">Dadpur</option><option value="Noannoi">Noannoi</option><option value="Kadirhanif">Kadirhanif</option><option value="Binodpur">Binodpur</option><option value="Dharmapur">Dharmapur</option><option value="Aujbalia">Aujbalia</option><option value="Kaladara">Kaladara</option><option value="Ashwadia">Ashwadia</option><option value="Newajpur">Newajpur</option><option value="Eastcharmatua">Eastcharmatua</option><option value="Andarchar">Andarchar</option><option value="Noakhali">Noakhali</option>';
	}else if(upZila_list == 'Companiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sirajpur">Sirajpur</option><option value="Charparboti">Charparboti</option><option value="Charhazari">Charhazari</option><option value="Charkakra">Charkakra</option><option value="Charfakira">Charfakira</option><option value="Musapur">Musapur</option><option value="Charelahi">Charelahi</option><option value="Rampur">Rampur</option>';
	}else if(upZila_list == 'Begumganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amanullapur">Amanullapur</option><option value="Gopalpur">Gopalpur</option><option value="Jirtali">Jirtali</option><option value="Kutubpur">Kutubpur</option><option value="Alyearpur">Alyearpur</option><option value="Chayani">Chayani</option><option value="Rajganj">Rajganj</option><option value="Eklashpur">Eklashpur</option><option value="Begumganj">Begumganj</option><option value="Mirwarishpur">Mirwarishpur</option><option value="Narottampur">Narottampur</option><option value="Durgapur">Durgapur</option><option value="Rasulpur">Rasulpur</option><option value="Hajipur">Hajipur</option><option value="Sharifpur">Sharifpur</option><option value="Kadirpur">Kadirpur</option>';
	}else if(upZila_list == 'Hatia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sukhchar">Sukhchar</option><option value="Nolchira">Nolchira</option><option value="Charishwar">Charishwar</option><option value="Charking">Charking</option><option value="Tomoroddi">Tomoroddi</option><option value="Sonadiya">Sonadiya</option><option value="Burirchar">Burirchar</option><option value="Jahajmara">Jahajmara</option><option value="Nijhumdwi">Nijhumdwi</option>';
	}else if(upZila_list == 'Subarnachar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charjabbar">Charjabbar</option><option value="Charbata">Charbata</option><option value="Charclerk">Charclerk</option><option value="Charwapda">Charwapda</option><option value="Charjubilee">Charjubilee</option><option value="Charamanullah">Charamanullah</option><option value="Eastcharbata">Eastcharbata</option><option value="Mohammadpur">Mohammadpur</option>';
	}else if(upZila_list == 'Kabirhat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Narottampurup1">Narottampurup1</option><option value="Dhanshiri">Dhanshiri</option><option value="Sundalpur">Sundalpur</option><option value="Ghoshbag">Ghoshbag</option><option value="Chaprashirhat">Chaprashirhat</option><option value="Dhanshalik">Dhanshalik</option><option value="Batoiya">Batoiya</option>';
	}else if(upZila_list == 'Senbug'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chhatarpaia">Chhatarpaia</option><option value="Kesharpar">Kesharpar</option><option value="Dumurua">Dumurua</option><option value="Kadra">Kadra</option><option value="Arjuntala">Arjuntala</option><option value="Kabilpur">Kabilpur</option><option value="Mohammadpurup7">Mohammadpurup7</option><option value="Nabipur">Nabipur</option><option value="Bejbagh">Bejbagh</option>';
	}else if(upZila_list == 'Chatkhil'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sahapur">Sahapur</option><option value="Ramnarayanpur">Ramnarayanpur</option><option value="Porokote">Porokote</option><option value="Badalkot">Badalkot</option><option value="Panchgaon">Panchgaon</option><option value="Hatpukuriaghatlabag">Hatpukuriaghatlabag</option><option value="Noakhala">Noakhala</option><option value="Khilpara">Khilpara</option><option value="Mohammadpuru5">Mohammadpuru5</option>';
	}else if(upZila_list == 'Sonaimuri'){
		var union_list = '<option disabled selected>Select Union</option><option value="Joyag">Joyag</option><option value="Nodona">Nodona</option><option value="Chashirhat">Chashirhat</option><option value="Barogaon">Barogaon</option><option value="Ambarnagor">Ambarnagor</option><option value="Nateshwar">Nateshwar</option><option value="Bajra">Bajra</option><option value="Sonapur">Sonapur</option><option value="Deoti">Deoti</option><option value="Amishapara">Amishapara</option>';
	}
//
	else if(upZila_list == 'Rangamati Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jibtali">Jibtali</option><option value="Sapchari">Sapchari</option><option value="Kutukchari">Kutukchari</option><option value="Bandukbhanga">Bandukbhanga</option><option value="Balukhali">Balukhali</option><option value="Mogban">Mogban</option>';
	}else if(upZila_list == 'Kaptai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Raikhali">Raikhali</option><option value="Kaptai">Kaptai</option><option value="Wagga">Wagga</option><option value="Chandraghona">Chandraghona</option><option value="Chitmorom">Chitmorom</option>';
	}else if(upZila_list == 'Kawkhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ghagra">Ghagra</option><option value="Fatikchari">Fatikchari</option><option value="Betbunia">Betbunia</option><option value="Kalampati">Kalampati</option>';
	}else if(upZila_list == 'Baghaichari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sajek">Sajek</option><option value="Amtali">Amtali</option><option value="Bongoltali">Bongoltali</option><option value="Rupokari">Rupokari</option><option value="Marisha">Marisha</option><option value="Khedarmara">Khedarmara</option><option value="Sharoyatali">Sharoyatali</option><option value="Baghaichari">Baghaichari</option>';
	}else if(upZila_list == 'Barkal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Subalong">Subalong</option><option value="Barkal">Barkal</option><option value="Bushanchara">Bushanchara</option><option value="Aimachara">Aimachara</option><option value="Borohorina">Borohorina</option>';
	}else if(upZila_list == 'Langadu'){
		var union_list = '<option disabled selected>Select Union</option><option value="Langad">Langad</option><option value="Maeinimukh">Maeinimukh</option><option value="Vasannadam">Vasannadam</option><option value="Bogachattar">Bogachattar</option><option value="Gulshakhali">Gulshakhali</option><option value="Kalapakujja">Kalapakujja</option><option value="Atarakchara">Atarakchara</option>';
	}else if(upZila_list == 'Rajasthali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ghilachari">Ghilachari</option><option value="Gaindya">Gaindya</option><option value="Bangalhalia">Bangalhalia</option>';
	}else if(upZila_list == 'Belaichari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kengrachari">Kengrachari</option><option value="Belaichari">Belaichari</option><option value="Farua">Farua</option>';
	}else if(upZila_list == 'Juraichari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Juraichari">Juraichari</option><option value="Banajogichara">Banajogichara</option><option value="Moidong">Moidong</option><option value="Dumdumya">Dumdumya</option>';
	}else if(upZila_list == 'Naniarchar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sabekkhong">Sabekkhong</option><option value="Naniarchar">Naniarchar</option><option value="Burighat">Burighat</option><option value="Ghilachhari">Ghilachhari</option>';
	}
//
	else if(upZila_list == 'Jashore Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Lebutala">Lebutala</option><option value="Ichhali">Ichhali</option><option value="Arabpurup9">Arabpurup9</option><option value="Upasahar">Upasahar</option><option value="Kachuaup13">Kachuaup13</option><option value="Kashimpurup6">Kashimpurup6</option><option value="Chanchra">Chanchra</option><option value="Churamankati">Churamankati</option><option value="Narendrapur">Narendrapur</option><option value="Noaparaup4">Noaparaup4</option><option value="Fathehpur">Fathehpur</option><option value="Basundia">Basundia</option><option value="Ramnagar">Ramnagar</option><option value="Haibatpur">Haibatpur</option><option value="Dearamodel">Dearamodel</option>';
	}else if(upZila_list == 'Manirampur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nehalpur">Nehalpur</option><option value="Hariharnagar">Hariharnagar</option><option value="Haridaskati">Haridaskati</option><option value="Shyamkur">Shyamkur</option><option value="Rohita">Rohita</option><option value="Maswimnagar">Maswimnagar</option><option value="Manoharpur">Manoharpur</option><option value="Manirampur">Manirampur</option><option value="Bhojgati">Bhojgati</option><option value="Durbadanga">Durbadanga</option><option value="Dhakuria">Dhakuria</option><option value="Jhanpa">Jhanpa</option><option value="Chaluahati">Chaluahati</option><option value="Khedapara">Khedapara</option><option value="Khanpur">Khanpur</option><option value="Kultia">Kultia</option><option value="Kashimnagar">Kashimnagar</option>';
	}else if(upZila_list == 'Abhaynagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baghutia">Baghutia</option><option value="Chalishia">Chalishia</option><option value="Sundoli">Sundoli</option><option value="Siddhipasha">Siddhipasha</option><option value="Sreedharpur">Sreedharpur</option><option value="Subharara">Subharara</option><option value="Prambag">Prambag</option><option value="Payra">Payra</option>';
	}else if(upZila_list == 'Bagherpara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jaharpur">Jaharpur</option><option value="Jamdia">Jamdia</option><option value="Darajhat">Darajhat</option><option value="Dhalgram">Dhalgram</option><option value="Narikelbaria">Narikelbaria</option><option value="Bandabilla">Bandabilla</option><option value="Basuari">Basuari</option><option value="Roypur">Roypur</option><option value="Dohakula">Dohakula</option>';
	}else if(upZila_list == 'Chougachha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chougachhaup5">Chougachhaup5</option><option value="Jagadishpurup6">Jagadishpurup6</option><option value="Dhulianiup4">Dhulianiup4</option><option value="Narayanpurup10">Narayanpurup10</option><option value="Patibilaup7">Patibilaup7</option><option value="Pashapoleup2">Pashapoleup2</option><option value="Fulsaraup1">Fulsaraup1</option><option value="Singhajhuliup3">Singhajhuliup3</option><option value="Sukpukhuriaup11">Sukpukhuriaup11</option><option value="Swarupdahaup9">Swarupdahaup9</option><option value="Hakimpurup8">Hakimpurup8</option>';
	}else if(upZila_list == 'Jhikargacha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ganganandapur">Ganganandapur</option><option value="Gadkhali">Gadkhali</option><option value="Jhikargachha">Jhikargachha</option><option value="Nabharan">Nabharan</option><option value="Nibaskhola">Nibaskhola</option><option value="Panisara">Panisara</option><option value="Bankra">Bankra</option><option value="Shankarpurup10">Shankarpurup10</option><option value="Shimuliaup3">Shimuliaup3</option><option value="Hajirbaghup9">Hajirbaghup9</option><option value="Magura">Magura</option>';
	}else if(upZila_list == 'Keshabpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sufalakatiup8">Sufalakatiup8</option><option value="Sagardariup2">Sagardariup2</option><option value="Majidpurup3">Majidpurup3</option><option value="Mongolkotup5">Mongolkotup5</option><option value="Bidyanandakatiup4">Bidyanandakatiup4</option><option value="Panjiaup7">Panjiaup7</option><option value="Trimohiniup1">Trimohiniup1</option><option value="Gaurighonaup9">Gaurighonaup9</option><option value="Keshabpurup6">Keshabpurup6</option>';
	}else if(upZila_list == 'Sharsha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ulshiup9">Ulshiup9</option><option value="Sharshaup10">Sharshaup10</option><option value="Lakshmanpurup2">Lakshmanpurup2</option><option value="Benapoleup4">Benapoleup4</option><option value="Bahadurpurup3">Bahadurpurup3</option><option value="Bagachraup8">Bagachraup8</option><option value="Putkhaliup5">Putkhaliup5</option><option value="Nizampurup11">Nizampurup11</option><option value="Dihiup1">Dihiup1</option><option value="Gogaup6">Gogaup6</option><option value="Kaybaup7">Kaybaup7</option>';
	}

	else if(upZila_list == 'Assasuni'){
		var union_list = '<option disabled selected>Select Union</option><option value="Anulia">Anulia</option><option value="Assasuni">Assasuni</option><option value="Kadakati">Kadakati</option><option value="Kulla">Kulla</option><option value="Khajra">Khajra</option><option value="Durgapur">Durgapur</option><option value="Pratapnagar">Pratapnagar</option><option value="Budhhata">Budhhata</option><option value="Baradal">Baradal</option><option value="Sreeula">Sreeula</option><option value="Sobhnali">Sobhnali</option>';
	}else if(upZila_list == 'Debhata'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kulia">Kulia</option><option value="Debhata">Debhata</option><option value="Noapara">Noapara</option><option value="Parulia">Parulia</option><option value="Sakhipur">Sakhipur</option>';
	}else if(upZila_list == 'Kalaroa'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kushadanga">Kushadanga</option><option value="Keralkata">Keralkata</option><option value="Keragachhi">Keragachhi</option><option value="Kaila">Kaila</option><option value="Jallabad">Jallabad</option><option value="Jogikhali">Jogikhali</option><option value="Langaljhara">Langaljhara</option><option value="Sonabaria">Sonabaria</option><option value="Helatala">Helatala</option><option value="Chandanpur">Chandanpur</option><option value="Deara">Deara</option><option value="Joynagar">Joynagar</option>';
	}else if(upZila_list == 'Satkhira sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shibpur">Shibpur</option><option value="Labsa">Labsa</option><option value="Bhomra">Bhomra</option><option value="Brahmarajpur">Brahmarajpur</option><option value="Balli">Balli</option><option value="Banshdaha">Banshdaha</option><option value="Baikari">Baikari</option><option value="Fingri">Fingri</option><option value="Dhulihar">Dhulihar</option><option value="Jhaudanga">Jhaudanga</option><option value="Ghona">Ghona</option><option value="Kuskhali">Kuskhali</option><option value="Alipur">Alipur</option><option value="Agardari">Agardari</option>';
	}else if(upZila_list == 'Shyamnagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Atulia">Atulia</option><option value="Ishwaripur">Ishwaripur</option><option value="Kaikhali">Kaikhali</option><option value="Kashimari">Kashimari</option><option value="Nurnagar">Nurnagar</option><option value="Padmapukur">Padmapukur</option><option value="Burigoalini">Burigoalini</option><option value="Bhurulia">Bhurulia</option><option value="Munshiganj">Munshiganj</option><option value="Ramjannagar">Ramjannagar</option><option value="Shyamnagar">Shyamnagar</option><option value="Gabura">Gabura</option>';
	}else if(upZila_list == 'Tala'){
		var union_list = '<option disabled selected>Select Union</option><option value="Saruliaup3">Saruliaup3</option><option value="Maguraup8">Maguraup8</option><option value="Nagarghataup1">Nagarghataup1</option><option value="Dhandiaup1">Dhandiaup1</option><option value="Tentuliaup5">Tentuliaup5</option><option value="Talaup6">Talaup6</option><option value="Jalalpurup11">Jalalpurup11</option><option value="Khesraup10">Khesraup10</option><option value="Khalishkhaliup9">Khalishkhaliup9</option><option value="Khalilnagarup12">Khalilnagarup12</option><option value="Kumiraup4">Kumiraup4</option><option value="Islamkatiup7">Islamkatiup7</option>';
	}else if(upZila_list == 'Kaliganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kushlia">Kushlia</option><option value="Champaphul">Champaphul</option><option value="Tarali">Tarali</option><option value="Dakshinsreepur">Dakshinsreepur</option><option value="Dhalbaria">Dhalbaria</option><option value="Nalta">Nalta</option><option value="Bishnupur">Bishnupur</option><option value="Bharasimla">Bharasimla</option><option value="Mathureshpur">Mathureshpur</option><option value="Ratanpur">Ratanpur</option><option value="Mautala">Mautala</option><option value="Krishnanagar">Krishnanagar</option>';
	}
//
	else if(upZila_list == 'Mujibnagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dariapur">Dariapur</option><option value="Monakhali">Monakhali</option><option value="Bagowan">Bagowan</option><option value="Mohajanpur">Mohajanpur</option>';
	}else if(upZila_list == 'Meherpur sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amjhupi">Amjhupi</option><option value="Pirojpur">Pirojpur</option><option value="Kutubpur">Kutubpur</option><option value="Amdah">Amdah</option><option value="Buripota">Buripota</option>';
	}else if(upZila_list == 'Gangni'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tentulbaria">Tentulbaria</option><option value="Kazipur">Kazipur</option><option value="Bamondi">Bamondi</option><option value="Motmura">Motmura</option><option value="Sholotaka">Sholotaka</option><option value="Shaharbati">Shaharbati</option><option value="Dhankolla">Dhankolla</option><option value="Raipur">Raipur</option><option value="Kathuli">Kathuli</option>';
	}
//
	else if(upZila_list == 'Narail sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sheikhati">Sheikhati</option><option value="Tularampur">Tularampur</option><option value="Kalora">Kalora</option><option value="Shahabad">Shahabad</option><option value="Bashgram">Bashgram</option><option value="Habokhali">Habokhali</option><option value="Maijpara">Maijpara</option><option value="Bisali">Bisali</option><option value="Chandiborpur">Chandiborpur</option><option value="Bhadrabila">Bhadrabila</option><option value="Auria">Auria</option><option value="Singasholpur">Singasholpur</option><option value="Mulia">Mulia</option>';
	}else if(upZila_list == 'Lohagara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Lohagora">Lohagora</option><option value="Kashipur">Kashipur</option><option value="Naldi">Naldi</option><option value="Noagram">Noagram</option><option value="Lahuria">Lahuria</option><option value="Mallikpur">Mallikpur</option><option value="Salnagar">Salnagar</option><option value="Lakshmipasha">Lakshmipasha</option><option value="Joypur">Joypur</option><option value="Kotakol">Kotakol</option><option value="Digholiaup1">Digholiaup1</option><option value="Itna">Itna</option>';
	}else if(upZila_list == 'Kalia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jaynagor">Jaynagor</option><option value="Pahordanga">Pahordanga</option><option value="Babrahasla">Babrahasla</option><option value="Salamabad">Salamabad</option><option value="Baioshona">Baioshona</option><option value="Chacuri">Chacuri</option><option value="Hamidpur">Hamidpur</option><option value="Peroli">Peroli</option><option value="Khashial">Khashial</option><option value="Purulia">Purulia</option><option value="Kalabaria">Kalabaria</option><option value="Mauli">Mauli</option><option value="Boronaleliasabad">Boronaleliasabad</option><option value="Panchgram">Panchgram</option>';
	}
//
	else if(upZila_list == 'Chuadanga sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alukdia">Alukdia</option><option value="Mominpur">Mominpur</option><option value="Titudah">Titudah</option><option value="Shankarchandra">Shankarchandra</option><option value="Begumpur">Begumpur</option><option value="Kutubpur">Kutubpur</option><option value="Padmabila">Padmabila</option>';
	}else if(upZila_list == 'Alamdanga'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhangbaria">Bhangbaria</option><option value="Baradi">Baradi</option><option value="Gangni">Gangni</option><option value="Khadimpur">Khadimpur</option><option value="Jehala">Jehala</option><option value="Belgachi">Belgachi</option><option value="Dauki">Dauki</option><option value="Jamjami">Jamjami</option><option value="Nagdah">Nagdah</option><option value="Kashkorara">Kashkorara</option><option value="Chitla">Chitla</option><option value="Kalidashpur">Kalidashpur</option><option value="Kumari">Kumari</option><option value="Hardi">Hardi</option><option value="Ailhash">Ailhash</option>';
	}else if(upZila_list == 'Damurhuda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Damurhuda">Damurhuda</option><option value="Karpashdanga">Karpashdanga</option><option value="Natipota">Natipota</option><option value="Hawli">Hawli</option><option value="Kurulgachhi">Kurulgachhi</option><option value="Perkrishnopurmadna">Perkrishnopurmadna</option><option value="Juranpur">Juranpur</option>';
	}else if(upZila_list == 'Jibannagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Uthali">Uthali</option><option value="Andulbaria">Andulbaria</option><option value="Banka">Banka</option><option value="Shimanto">Shimanto</option><option value="Raypur">Raypur</option><option value="Hasadah">Hasadah</option>';
	}
//
	else if(upZila_list == 'Kushtia sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nohatashharipur">1nohatashharipur</option><option value="2nobarkhada">2nobarkhada</option><option value="3nomazampur">3nomazampur</option><option value="4nobottail">4nobottail</option><option value="5noalampur">5noalampur</option><option value="6noziaraakhi">6noziaraakhi</option><option value="7noailchara">7noailchara</option><option value="8nopatikabari">8nopatikabari</option><option value="9nojhaudia">9nojhaudia</option><option value="10noujangram">10noujangram</option><option value="11noabdulpur">11noabdulpur</option><option value="12noharinarayanpur">12noharinarayanpur</option><option value="13nomonohardia">13nomonohardia</option><option value="14nogoswamidurgapur">14nogoswamidurgapur</option>';
	}else if(upZila_list == 'Kumarkhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nokaya">1nokaya</option><option value="3nojagonnathpur">3nojagonnathpur</option><option value="4nosadki">4nosadki</option><option value="2noshelaidah">2noshelaidah</option><option value="5nonandolalpur">5nonandolalpur</option><option value="6nochapra">6nochapra</option><option value="7nobagulat">7nobagulat</option><option value="8nojaduboyra">8nojaduboyra</option><option value="9nochadpur">9nochadpur</option><option value="10nopanti">10nopanti</option><option value="11nocharsadipur">11nocharsadipur</option>';
	}else if(upZila_list == 'Khoksa'){
		var union_list = '<option disabled selected>Select Union</option><option value="1nokhoksa">1nokhoksa</option><option value="2noosmanpur">2noosmanpur</option><option value="4nojanipur">4nojanipur</option><option value="5noshimulia">5noshimulia</option><option value="8nojoyntihazra">8nojoyntihazra</option><option value="9noambaria">9noambaria</option><option value="3nobethbaria">3nobethbaria</option><option value="6noshomospur">6noshomospur</option><option value="Gopgram7">Gopgram7</option>';
	}else if(upZila_list == 'Mirpurkushtia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chithalia">Chithalia</option><option value="Bahalbaria">Bahalbaria</option><option value="Talbaria">Talbaria</option><option value="Baruipara">Baruipara</option><option value="Fulbaria">Fulbaria</option><option value="Amla">Amla</option><option value="Chhatian">Chhatian</option><option value="Sadarpur">Sadarpur</option><option value="Poradaha">Poradaha</option><option value="Kursha">Kursha</option><option value="Ambaria">Ambaria</option><option value="Dhubail">Dhubail</option><option value="11nomalihad">11nomalihad</option>';
	}else if(upZila_list == 'Daulatpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Daulatpur">Daulatpur</option><option value="Adabaria">Adabaria</option><option value="Hogolbaria">Hogolbaria</option><option value="Boalia">Boalia</option><option value="Philipnagor">Philipnagor</option><option value="Aria">Aria</option><option value="Khalishakundi">Khalishakundi</option><option value="Chilmary">Chilmary</option><option value="Mothurapur">Mothurapur</option><option value="Pragpur">Pragpur</option><option value="Piarpur">Piarpur</option><option value="Moricha">Moricha</option><option value="9norefaitpur">9norefaitpur</option><option value="5noramkrishnopur">5noramkrishnopur</option>';
	}else if(upZila_list == 'Bheramara'){
		var union_list = '<option disabled selected>Select Union</option><option value="5nodharampur">5nodharampur</option><option value="3nobahirchar">3nobahirchar</option><option value="2nomukarimpur">2nomukarimpur</option><option value="6nojuniadah">6nojuniadah</option><option value="4nochandgram">4nochandgram</option><option value="1nobahadurpur">1nobahadurpur</option>';
	}
//
	else if(upZila_list == 'Paikgasa'){
		var union_list = '<option disabled selected>Select Union</option><option value="Haridhali">Haridhali</option><option value="Garikhali">Garikhali</option><option value="Kapil Muni">Kapil Muni</option><option value="Creeper">Creeper</option><option value="Deluti">Deluti</option><option value="Lashkar">Lashkar</option><option value="Gadaipur">Gadaipur</option><option value="Raduli">Raduli</option><option value="Chandkhali">Chandkhali</option><option value="Soladana">Soladana</option>';
	}else if(upZila_list == 'Fultola'){
		var union_list = '<option disabled selected>Select Union</option><option value="Flower floor">Flower floor</option><option value="Damodar">Damodar</option><option value="Atara Gilatala">Atara Gilatala</option><option value="Jamira">Jamira</option>';
	}else if(upZila_list == 'Digholia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Senhati">Senhati</option><option value="Gazirhat">Gazirhat</option><option value="Barakpur">Barakpur</option><option value="Aranghata">Aranghata</option><option value="Yogipol">Yogipol</option><option value="Dighalia">Dighalia</option>';
	}else if(upZila_list == 'Rupsha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Aichgati">Aichgati</option><option value="Shrifaltala">Shrifaltala</option><option value="Naihati">Naihati</option><option value="TSB">TSB</option><option value="Ghatbhog">Ghatbhog</option>';
	}else if(upZila_list == 'Terokhada'){
		var union_list = '<option disabled selected>Select Union</option><option value="Terkhada">Terkhada</option><option value="Chagladah">Chagladah</option><option value="Barasat">Barasat</option><option value="Sachiadah">Sachiadah</option><option value="Madhupur">Madhupur</option><option value="Azgarh">Azgarh</option>';
	}else if(upZila_list == 'Dumuria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dumuria">Dumuria</option><option value="Maguraghona">Maguraghona</option><option value="Bhandarpara">Bhandarpara</option><option value="Sahas">Sahas</option><option value="Rudaghara">Rudaghara</option><option value="Gutudia">Gutudia</option><option value="Shobhana">Shobhana</option><option value="Kharnia">Kharnia</option><option value="Atalia">Atalia</option><option value="Dhamalia">Dhamalia</option><option value="Raghunathpur">Raghunathpur</option><option value="Rangpur">Rangpur</option><option value="Sharafpur">Sharafpur</option><option value="Magurkhali">Magurkhali</option>';
	}else if(upZila_list == 'Botiaghata'){
		var union_list = '<option disabled selected>Select Union</option><option value="Batiaghata">Batiaghata</option><option value="Amirpur">Amirpur</option><option value="Gangarampur">Gangarampur</option><option value="Surkhali">Surkhali</option><option value="Bhandarkot">Bhandarkot</option><option value="Baliadanga">Baliadanga</option><option value="Jalma">Jalma</option>';
	}else if(upZila_list == 'Dakop'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dakop">Dakop</option><option value="Bajua">Bajua</option><option value="Kamarkhola">Kamarkhola</option><option value="Tildanga">Tildanga</option><option value="Sutarkhali">Sutarkhali</option><option value="Laudob">Laudob</option><option value="Pankhali">Pankhali</option><option value="Banishanta">Banishanta</option><option value="Kailashganj">Kailashganj</option>';
	}else if(upZila_list == 'Koyra'){
		var union_list = '<option disabled selected>Select Union</option><option value="Koira">Koira</option><option value="Maharajpur">Maharajpur</option><option value="Maheshwaripur">Maheshwaripur</option><option value="North Bedkashi">North Bedkashi</option><option value="South Bedkashi">South Bedkashi</option><option value="Amadi">Amadi</option><option value="Bagali">Bagali</option>';
	}
//
	else if(upZila_list == 'Bagerhat Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Karapara">Karapara</option><option value="Bamorta">Bamorta</option><option value="Gotapara">Gotapara</option><option value="Bishnapur">Bishnapur</option><option value="Baruipara">Baruipara</option><option value="Jatharapur">Jatharapur</option><option value="Shaitgomboj">Shaitgomboj</option><option value="Khanpur">Khanpur</option><option value="Rakhalgachi">Rakhalgachi</option><option value="Dema">Dema</option>';
	}else if(upZila_list == 'Fakirhat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Betaga">Betaga</option><option value="Lakhpur">Lakhpur</option><option value="Fakirhat">Fakirhat</option><option value="Bahirdiamansa">Bahirdiamansa</option><option value="Piljanga">Piljanga</option><option value="Naldhamauvhog">Naldhamauvhog</option><option value="Mulghar">Mulghar</option><option value="Suvhadia">Suvhadia</option>';
	}else if(upZila_list == 'Mollahat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Udoypur">Udoypur</option><option value="Chunkhola">Chunkhola</option><option value="Gangni">Gangni</option><option value="Kulia">Kulia</option><option value="Gaola">Gaola</option><option value="Kodalia">Kodalia</option><option value="Atjuri">Atjuri</option>';
	}else if(upZila_list == 'Sarankhola'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dhanshagor">Dhanshagor</option><option value="Khontakata">Khontakata</option><option value="Rayenda">Rayenda</option><option value="Southkhali">Southkhali</option>';
	}else if(upZila_list == 'Rampal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gouramva">Gouramva</option><option value="Uzzalkur">Uzzalkur</option><option value="Baintala">Baintala</option><option value="Rampal">Rampal</option><option value="Rajnagar">Rajnagar</option><option value="Hurka">Hurka</option><option value="Perikhali">Perikhali</option><option value="Vospatia">Vospatia</option><option value="Mollikerbar">Mollikerbar</option><option value="Bastoli">Bastoli</option>';
	}else if(upZila_list == 'Morrelganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Teligati">Teligati</option><option value="Panchakaran">Panchakaran</option><option value="Putikhali">Putikhali</option><option value="Daibagnyahati">Daibagnyahati</option><option value="Ramchandrapur">Ramchandrapur</option><option value="Chingrakhali">Chingrakhali</option><option value="Jiudhara">Jiudhara</option><option value="Hoglapasha">Hoglapasha</option><option value="Banagram">Banagram</option><option value="Balaibunia">Balaibunia</option><option value="Hoglabunia">Hoglabunia</option><option value="Baharbunia">Baharbunia</option><option value="Morrelganj">Morrelganj</option><option value="Khaulia">Khaulia</option><option value="Nishanbaria">Nishanbaria</option><option value="Baraikhali">Baraikhali</option>';
	}else if(upZila_list == 'Kachua'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gojalia">Gojalia</option><option value="Dhopakhali">Dhopakhali</option><option value="Moghia">Moghia</option><option value="Kachua">Kachua</option><option value="Gopalpur">Gopalpur</option><option value="Raripara">Raripara</option><option value="Badhal">Badhal</option>';
	}else if(upZila_list == 'Mongla'){
		var union_list = '<option disabled selected>Select Union</option><option value="Burrirdangga">Burrirdangga</option><option value="Mithakhali">Mithakhali</option><option value="Sonailtala">Sonailtala</option><option value="Chadpai">Chadpai</option><option value="Chila">Chila</option><option value="Sundarban">Sundarban</option>';
	}else if(upZila_list == 'Chitalmari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barobaria">Barobaria</option><option value="Kalatala">Kalatala</option><option value="Hizla">Hizla</option><option value="Shibpur">Shibpur</option><option value="Chitalmari">Chitalmari</option><option value="Charbaniri">Charbaniri</option><option value="Shantoshpur">Shantoshpur</option>';
	}
//
	else if(upZila_list == 'Shalikha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dhaneshwargati">Dhaneshwargati</option><option value="Talkhari">Talkhari</option><option value="Arpara">Arpara</option><option value="Shatakhali">Shatakhali</option><option value="Shalikha">Shalikha</option><option value="Bunagati">Bunagati</option><option value="Gongarampur">Gongarampur</option>';
	}else if(upZila_list == 'Sreepur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Goyespur">Goyespur</option><option value="Sreekol">Sreekol</option><option value="Dariapur">Dariapur</option><option value="Kadirpara">Kadirpara</option><option value="Shobdalpur">Shobdalpur</option><option value="Sreepur">Sreepur</option><option value="Nakol">Nakol</option><option value="Amalshar">Amalshar</option>';
	}else if(upZila_list == 'Magurasadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Hazipur">Hazipur</option><option value="Atharokhada">Atharokhada</option><option value="Kosundi">Kosundi</option><option value="Bogia">Bogia</option><option value="Hazrapur">Hazrapur</option><option value="Raghobdair">Raghobdair</option><option value="Jagdal">Jagdal</option><option value="Chawlia">Chawlia</option><option value="Satrijitpur">Satrijitpur</option><option value="Baroilpolita">Baroilpolita</option><option value="Kuchiamora">Kuchiamora</option><option value="Gopalgram">Gopalgram</option><option value="Moghi">Moghi</option>';
	}else if(upZila_list == 'Mohammadpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Digha">Digha</option><option value="Nohata">Nohata</option><option value="Palashbaria">Palashbaria</option><option value="Babukhali">Babukhali</option><option value="Balidia">Balidia</option><option value="Binodpur">Binodpur</option><option value="Mohammadpur">Mohammadpur</option><option value="Rajapur">Rajapur</option>';
	}
//
	else if(upZila_list == 'Jhenaidah Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sadhuhati">Sadhuhati</option><option value="Modhuhati">Modhuhati</option><option value="Saganna">Saganna</option><option value="Halidhani">Halidhani</option><option value="Kumrabaria">Kumrabaria</option><option value="Ganna">Ganna</option><option value="Maharazpur">Maharazpur</option><option value="Paglakanai">Paglakanai</option><option value="Porahati">Porahati</option><option value="Harishongkorpur">Harishongkorpur</option><option value="Padmakar">Padmakar</option><option value="Dogachhi">Dogachhi</option><option value="Furshondi">Furshondi</option><option value="Ghorshal">Ghorshal</option><option value="Kalicharanpur">Kalicharanpur</option><option value="Surat">Surat</option><option value="Naldanga">Naldanga</option>';
	}else if(upZila_list == 'Shailkupa'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tribeni">Tribeni</option><option value="Mirzapur">Mirzapur</option><option value="Dignagore">Dignagore</option><option value="Kancherkol">Kancherkol</option><option value="Sarutia">Sarutia</option><option value="Hakimpur">Hakimpur</option><option value="Dhaloharachandra">Dhaloharachandra</option><option value="Manoharpur">Manoharpur</option><option value="Bogura">Bogura</option><option value="Abaipur">Abaipur</option><option value="Nityanandapur">Nityanandapur</option><option value="Umedpur">Umedpur</option><option value="Dudshar">Dudshar</option><option value="Fulhari">Fulhari</option>';
	}else if(upZila_list == 'Harinakundu'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhayna">Bhayna</option><option value="Joradah">Joradah</option><option value="Taherhuda">Taherhuda</option><option value="Daulatpur">Daulatpur</option><option value="Kapashatia">Kapashatia</option><option value="Falsi">Falsi</option><option value="Raghunathpur">Raghunathpur</option><option value="Chandpur">Chandpur</option>';
	}else if(upZila_list == 'Kaliganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sundarpurdurgapur">Sundarpurdurgapur</option><option value="Jamal">Jamal</option><option value="Kola">Kola</option><option value="Niamatpur">Niamatpur</option><option value="Simlarokonpur">Simlarokonpur</option><option value="Trilochanpur">Trilochanpur</option><option value="Raygram">Raygram</option><option value="Maliat">Maliat</option><option value="Barabazar">Barabazar</option><option value="Kashtabhanga">Kashtabhanga</option><option value="Rakhalgachhi">Rakhalgachhi</option>';
	}else if(upZila_list == 'Kotchandpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sabdalpur">Sabdalpur</option><option value="Dora">Dora</option><option value="Kushna">Kushna</option><option value="Baluhar">Baluhar</option><option value="Elangi">Elangi</option>';
	}else if(upZila_list == 'Moheshpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sbk">Sbk</option><option value="Fatepur">Fatepur</option><option value="Panthapara">Panthapara</option><option value="Swaruppur">Swaruppur</option><option value="Shyamkur">Shyamkur</option><option value="Nepa">Nepa</option><option value="Kazirber">Kazirber</option><option value="Banshbaria">Banshbaria</option><option value="Jadabpur">Jadabpur</option><option value="Natima">Natima</option><option value="Manderbaria">Manderbaria</option><option value="Azampur">Azampur</option>';
	}
//
	else if(upZila_list == 'Amtali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amtali">Amtali</option><option value="Gulishakhali">Gulishakhali</option><option value="Athrogasia">Athrogasia</option><option value="Kukua">Kukua</option><option value="Haldia">Haldia</option><option value="Chotobogi">Chotobogi</option><option value="Arpangasia">Arpangasia</option><option value="Chowra">Chowra</option>';
	}else if(upZila_list == 'Barguna Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="M">M</option><option value="Noltona">Noltona</option><option value="Bodorkhali">Bodorkhali</option><option value="Gowrichanna">Gowrichanna</option><option value="Fuljhuri">Fuljhuri</option><option value="Keorabunia">Keorabunia</option><option value="AylaPatakata">AylaPatakata</option><option value="Burirchor">Burirchor</option><option value="Dhalua">Dhalua</option><option value="Barguna">Barguna</option>';
	}else if(upZila_list == 'Betagi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bibichini">Bibichini</option><option value="Betagi">Betagi</option><option value="Hosnabad">Hosnabad</option><option value="Mokamia">Mokamia</option><option value="Buramajumder">Buramajumder</option><option value="Kazirabad">Kazirabad</option><option value="Sarisamuri">Sarisamuri</option>';
	}else if(upZila_list == 'Bamna'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bukabunia">Bukabunia</option><option value="Bamna">Bamna</option><option value="Ramna">Ramna</option><option value="Doutola">Doutola</option>';
	}else if(upZila_list == 'Pathorghata'){
		var union_list = '<option disabled selected>Select Union</option><option value="Raihanpur">Raihanpur</option><option value="Nachnapara">Nachnapara</option><option value="Charduany">Charduany</option><option value="Patharghata">Patharghata</option><option value="Kalmegha">Kalmegha</option><option value="Kakchira">Kakchira</option><option value="Kathaltali">Kathaltali</option>';
	}else if(upZila_list == 'Taltali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Karibaria">Karibaria</option><option value="Panchakoralia">Panchakoralia</option><option value="Barabagi">Barabagi</option><option value="Chhotabagi">Chhotabagi</option><option value="Nishanbaria">Nishanbaria</option><option value="Sarikkhali">Sarikkhali</option><option value="Sonakata">Sonakata</option>';
	}

	else if(upZila_list == 'Bhola Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Razapur">Razapur</option><option value="Ilisha">Ilisha</option><option value="Westilisa">Westilisa</option><option value="Kachia">Kachia</option><option value="Bapta">Bapta</option><option value="Dhania">Dhania</option><option value="Shibpur">Shibpur</option><option value="Alinagor">Alinagor</option><option value="Charshamya">Charshamya</option><option value="Vhelumia">Vhelumia</option><option value="Vheduria">Vheduria</option><option value="Northdigholdi">Northdigholdi</option><option value="Southdigholdi">Southdigholdi</option>';
	}else if(upZila_list == 'Borhanuddin'){
		var union_list = '<option disabled selected>Select Union</option><option value="Boromanika">Boromanika</option><option value="Deula">Deula</option><option value="Kutuba">Kutuba</option><option value="Pakshia">Pakshia</option><option value="Kachiaup4">Kachiaup4</option>';
	}else if(upZila_list == 'Charfesson'){
		var union_list = '<option disabled selected>Select Union</option><option value="Osmangonj">Osmangonj</option><option value="Aslampur">Aslampur</option><option value="Zinnagor">Zinnagor</option><option value="Aminabad">Aminabad</option><option value="Nilkomol">Nilkomol</option><option value="Charmadraj">Charmadraj</option><option value="Awajpur">Awajpur</option><option value="Charkolmi">Charkolmi</option><option value="Charmanika">Charmanika</option><option value="Hazarigonj">Hazarigonj</option><option value="jahanpur">jahanpur</option><option value="Nurabad">Nurabad</option><option value="Rasulpur">Rasulpur</option><option value="Kukrimukri">Kukrimukri</option><option value="Abubakarpur">Abubakarpur</option><option value="Abdullahpur">Abdullahpur</option><option value="Nazrulnagar">Nazrulnagar</option><option value="Mujibnagar">Mujibnagar</option><option value="Dalchar">Dalchar</option>';
	}else if(upZila_list == 'Doulatkhan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Madanpur">Madanpur</option><option value="Madua">Madua</option><option value="Charpata">Charpata</option><option value="Northjoynagar">Northjoynagar</option><option value="Southjoynagar">Southjoynagar</option><option value="Charkhalipa">Charkhalipa</option><option value="Sayedpur">Sayedpur</option><option value="Hazipur">Hazipur</option><option value="Vhovanipur">Vhovanipur</option>';
	}else if(upZila_list == 'Monpura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Hazirhat">Hazirhat</option><option value="Monpura">Monpura</option><option value="Sakuchianorth">Sakuchianorth</option><option value="Sakuchiasouth">Sakuchiasouth</option>';
	}else if(upZila_list == 'Tazumuddin'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chanchra">Chanchra</option><option value="Shambupur">Shambupur</option><option value="Sonapur">Sonapur</option><option value="Chadpur">Chadpur</option><option value="Baromolongchora">Baromolongchora</option>';
	}else if(upZila_list == 'Lalmohan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Badarpur">Badarpur</option><option value="Charbhuta">Charbhuta</option><option value="Kalma">Kalma</option><option value="Dholigournagar">Dholigournagar</option><option value="Lalmohan">Lalmohan</option><option value="Lordhardinge">Lordhardinge</option><option value="Ramagonj">Ramagonj</option><option value="Paschimcharumed">Paschimcharumed</option><option value="Farajgonj">Farajgonj</option>';
	}
//
	else if(upZila_list == 'Barishal sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Raipashakarapur">Raipashakarapur</option><option value="Kashipur">Kashipur</option><option value="Charbaria">Charbaria</option><option value="Shyastabad">Shyastabad</option><option value="Charmonai">Charmonai</option><option value="Zagua">Zagua</option><option value="Charcowa">Charcowa</option><option value="Chandpura">Chandpura</option><option value="Tungibaria">Tungibaria</option><option value="Chandramohan">Chandramohan</option>';
	}else if(upZila_list == 'Bakerganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charamaddi">Charamaddi</option><option value="Charade">Charade</option><option value="Darial">Darial</option><option value="Dudhal">Dudhal</option><option value="Durgapasha">Durgapasha</option><option value="Faridpur">Faridpur</option><option value="Kabai">Kabai</option><option value="Nalua">Nalua</option><option value="Kalashkathi">Kalashkathi</option><option value="Garuria">Garuria</option><option value="Bharpasha">Bharpasha</option><option value="Rangasree">Rangasree</option><option value="Padreeshibpur">Padreeshibpur</option><option value="Niamoti">Niamoti</option>';
	}else if(upZila_list == 'Babuganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jahangirnagor">Jahangirnagor</option><option value="Kaderpur">Kaderpur</option><option value="Deherhoti">Deherhoti</option><option value="Chandpasha">Chandpasha</option><option value="Rahamtpur">Rahamtpur</option><option value="Madhbpasha">Madhbpasha</option>';
	}else if(upZila_list == 'Wazirpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shatla">Shatla</option><option value="Harta">Harta</option><option value="Jalla">Jalla</option><option value="Otra">Otra</option><option value="Sholok">Sholok</option><option value="Barakhota">Barakhota</option><option value="Bamrail">Bamrail</option><option value="Shikerpurwazirpur">Shikerpurwazirpur</option><option value="Gouthia">Gouthia</option>';
	}else if(upZila_list == 'Banaripara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bisharkandi">Bisharkandi</option><option value="Illuhar">Illuhar</option><option value="Sayedkathi">Sayedkathi</option><option value="Chakhar">Chakhar</option><option value="Saliabakpur">Saliabakpur</option><option value="Baishari">Baishari</option><option value="Banaripara">Banaripara</option><option value="Udykhati">Udykhati</option>';
	}else if(upZila_list == 'Gournadi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Khanjapur">Khanjapur</option><option value="Barthi">Barthi</option><option value="Chandshi">Chandshi</option><option value="Mahilara">Mahilara</option><option value="Nalchira">Nalchira</option><option value="Batajore">Batajore</option><option value="Sarikal">Sarikal</option>';
	}else if(upZila_list == 'Agailjhara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajihar">Rajihar</option><option value="Bakal">Bakal</option><option value="Bagdha">Bagdha</option><option value="Goila">Goila</option><option value="Ratnapur">Ratnapur</option>';
	}else if(upZila_list == 'Mehendiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Andarmanik">Andarmanik</option><option value="Lata">Lata</option><option value="Charakkorea">Charakkorea</option><option value="Northulania">Northulania</option><option value="Mehendigong">Mehendigong</option><option value="Biddanandapur">Biddanandapur</option><option value="Bhashanchar">Bhashanchar</option><option value="Jangalia">Jangalia</option><option value="Alimabad">Alimabad</option><option value="Chandpur">Chandpur</option><option value="Darircharkhajuria">Darircharkhajuria</option><option value="Gobindapur">Gobindapur</option><option value="Chargopalpur">Chargopalpur</option><option value="Southulania">Southulania</option><option value="Sreepur">Sreepur</option><option value="Joynagar">Joynagar</option>';
	}else if(upZila_list == 'Muladi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Batamara">Batamara</option><option value="Nazirpur">Nazirpur</option><option value="Safipur">Safipur</option><option value="Gaschua">Gaschua</option><option value="Charkalekha">Charkalekha</option><option value="Muladi">Muladi</option><option value="Kazirchar">Kazirchar</option>';
	}else if(upZila_list == 'Hizla'){
		var union_list = '<option disabled selected>Select Union</option><option value="Harinathpur">Harinathpur</option><option value="Memania">Memania</option><option value="Guabaria">Guabaria</option><option value="Barjalia">Barjalia</option><option value="Hizlagourabdi">Hizlagourabdi</option><option value="Dhulkhola">Dhulkhola</option>';
	}
//
	else if(upZila_list == 'Pirojpur Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shikdermallik">Shikdermallik</option><option value="Kodomtala">Kodomtala</option><option value="Durgapur">Durgapur</option><option value="Kolakhali">Kolakhali</option><option value="Tona">Tona</option><option value="Shariktola">Shariktola</option><option value="Shankorpasa">Shankorpasa</option>';
	}else if(upZila_list == 'Nazirpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mativangga">Mativangga</option><option value="Malikhali">Malikhali</option><option value="Daulbaridobra">Daulbaridobra</option><option value="Dirgha">Dirgha</option><option value="Kolardoania">Kolardoania</option><option value="Sriramkathi">Sriramkathi</option><option value="Shakhmatia">Shakhmatia</option><option value="Nazirpursadar">Nazirpursadar</option><option value="Shakharikathi">Shakharikathi</option>';
	}else if(upZila_list == 'Kawkhali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Saynarogunathpur">Saynarogunathpur</option><option value="Amrazuri">Amrazuri</option><option value="Kawkhalisadar">Kawkhalisadar</option><option value="Chirapara">Chirapara</option><option value="Shialkhathi">Shialkhathi</option>';
	}else if(upZila_list == 'Bhandaria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Vitabaria">Vitabaria</option><option value="Nodmulla">Nodmulla</option><option value="Telikhali">Telikhali</option><option value="Ekree">Ekree</option><option value="Dhaoa">Dhaoa</option><option value="Vandariasadar">Vandariasadar</option><option value="Gouripur">Gouripur</option>';
	}else if(upZila_list == 'Mathbaria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tuskhali">Tuskhali</option><option value="Dhanisafa">Dhanisafa</option><option value="Mirukhali">Mirukhali</option><option value="Tikikata">Tikikata</option><option value="Betmorrajpara">Betmorrajpara</option><option value="Amragachia">Amragachia</option><option value="Shapleza">Shapleza</option><option value="Daudkhali">Daudkhali</option><option value="Mathbaria">Mathbaria</option><option value="Baramasua">Baramasua</option><option value="Haltagulishakhali">Haltagulishakhali</option>';
	}else if(upZila_list == 'Nesarabad'){
		var union_list = '<option disabled selected>Select Union</option><option value="Boldia">Boldia</option><option value="Sohagdal">Sohagdal</option><option value="Atghorkuriana">Atghorkuriana</option><option value="Jolabari">Jolabari</option><option value="Doyhary">Doyhary</option><option value="Guarekha">Guarekha</option><option value="Somudoykathi">Somudoykathi</option><option value="Sutiakathi">Sutiakathi</option><option value="Sarengkathi">Sarengkathi</option><option value="Shorupkathi">Shorupkathi</option>';
	}else if(upZila_list == 'Indurkani'){
		var union_list = 'Null';
	}
//
	else if(upZila_list == 'Bauphal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Adabaria">Adabaria</option><option value="Bauphal">Bauphal</option><option value="Daspara">Daspara</option><option value="Kalaiya">Kalaiya</option><option value="Nawmala">Nawmala</option><option value="Najirpur">Najirpur</option><option value="Madanpura">Madanpura</option><option value="Boga">Boga</option><option value="Kanakdia">Kanakdia</option><option value="Shurjamoni">Shurjamoni</option><option value="Keshabpur">Keshabpur</option><option value="Dhulia">Dhulia</option><option value="Kalisuri">Kalisuri</option><option value="Kachipara">Kachipara</option>';
	}else if(upZila_list == 'Bauphal Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Laukathi">Laukathi</option><option value="Lohalia">Lohalia</option><option value="Kamalapur">Kamalapur</option><option value="Jainkathi">Jainkathi</option><option value="Kalikapur">Kalikapur</option><option value="Badarpur">Badarpur</option><option value="Itbaria">Itbaria</option><option value="Marichbunia">Marichbunia</option><option value="Auliapur">Auliapur</option><option value="Chotobighai">Chotobighai</option><option value="Borobighai">Borobighai</option><option value="Madarbunia">Madarbunia</option>';
	}else if(upZila_list == 'Dumki'){
		var union_list = '<option disabled selected>Select Union</option><option value="Pangasia">Pangasia</option><option value="Muradia">Muradia</option><option value="Labukhali">Labukhali</option><option value="Angaria">Angaria</option><option value="Sreerampur">Sreerampur</option>';
	}else if(upZila_list == 'Dashmina'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bashbaria">Bashbaria</option><option value="Rangopaldi">Rangopaldi</option><option value="Alipur">Alipur</option><option value="Betagishankipur">Betagishankipur</option><option value="Dashmina">Dashmina</option><option value="Baharampur">Baharampur</option>';
	}else if(upZila_list == 'Kalapara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chakamaia">Chakamaia</option><option value="Tiakhali">Tiakhali</option><option value="Lalua">Lalua</option><option value="Dhankhali">Dhankhali</option><option value="Mithagonj">Mithagonj</option><option value="Nilgonj">Nilgonj</option><option value="Dulaser">Dulaser</option><option value="Latachapli">Latachapli</option><option value="Mahipur">Mahipur</option><option value="Dalbugonj">Dalbugonj</option><option value="Baliatali">Baliatali</option><option value="Champapur">Champapur</option>';
	}else if(upZila_list == 'Mirzaganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Madhabkhali">Madhabkhali</option><option value="Mirzaganj">Mirzaganj</option><option value="Amragachia">Amragachia</option><option value="Deulisubidkhali">Deulisubidkhali</option><option value="Kakrabunia">Kakrabunia</option><option value="Majidbaria">Majidbaria</option>';
	}else if(upZila_list == 'Galachipa'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amkhola">Amkhola</option><option value="Golkhali">Golkhali</option><option value="Galachipa">Galachipa</option><option value="Panpatty">Panpatty</option><option value="Ratanditaltali">Ratanditaltali</option><option value="Dakua">Dakua</option><option value="Chiknikandi">Chiknikandi</option><option value="Gazalia">Gazalia</option><option value="Charkajol">Charkajol</option><option value="Charbiswas">Charbiswas</option><option value="Bakulbaria">Bakulbaria</option><option value="Kalagachhia">Kalagachhia</option>';
	}else if(upZila_list == 'Rangabali'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rangabali">Rangabali</option><option value="Barobaisdia">Barobaisdia</option><option value="Chattobaisdia">Chattobaisdia</option><option value="Charmontaz">Charmontaz</option><option value="chalitabunia">chalitabunia</option>';
	}
//
	else if(upZila_list == 'Jhalokati Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Basanda">Basanda</option><option value="Binoykati">Binoykati</option><option value="Gabharamchandrapur">Gabharamchandrapur</option><option value="Keora">Keora</option><option value="Kirtipasha">Kirtipasha</option><option value="Nabagram">Nabagram</option><option value="Nathullabad">Nathullabad</option><option value="Ponabalia">Ponabalia</option><option value="Sekherhat">Sekherhat</option><option value="Gabkhandhansiri">Gabkhandhansiri</option>';
	}else if(upZila_list == 'Kathalia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amua">Amua</option><option value="Awrabunia">Awrabunia</option><option value="Chenchrirampur">Chenchrirampur</option><option value="Kanthalia">Kanthalia</option><option value="Patikhalghata">Patikhalghata</option><option value="Shaulajalia">Shaulajalia</option>';
	}else if(upZila_list == 'Nalchity'){
		var union_list = '<option disabled selected>Select Union</option><option value="Subidpur">Subidpur</option><option value="Siddhakati">Siddhakati</option><option value="Ranapasha">Ranapasha</option><option value="Nachanmohal">Nachanmohal</option><option value="Mollahat">Mollahat</option><option value="Magar">Magar</option><option value="Kusanghal">Kusanghal</option><option value="Kulkathi">Kulkathi</option><option value="Dapdapia">Dapdapia</option><option value="Bharabpas">Bharabpas</option>';
	}else if(upZila_list == 'Rajapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Suktagarh">Suktagarh</option><option value="Saturia">Saturia</option><option value="Galua">Galua</option><option value="Baraia">Baraia</option><option value="Rajapur">Rajapur</option><option value="Mathbari">Mathbari</option>';
	}


	else if(upZila_list == 'Kurigram sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Holokhana">Holokhana</option><option value="Ghogadhoh">Ghogadhoh</option><option value="Belgacha">Belgacha</option><option value="Mogolbasa">Mogolbasa</option><option value="Panchgachi">Panchgachi</option><option value="Jatrapur">Jatrapur</option><option value="Kanthalbari">Kanthalbari</option><option value="Bhogdanga">Bhogdanga</option>';
	}else if(upZila_list == 'Nageshwari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ramkhana">Ramkhana</option><option value="Raigonj">Raigonj</option><option value="Bamondanga">Bamondanga</option><option value="Berubari">Berubari</option><option value="Sontaspur">Sontaspur</option><option value="Hasnabad">Hasnabad</option><option value="Newyashi">Newyashi</option><option value="Bhitorbond">Bhitorbond</option><option value="Kaligonj">Kaligonj</option><option value="Noonkhawa">Noonkhawa</option><option value="Narayanpur">Narayanpur</option><option value="Kedar">Kedar</option><option value="Kachakata">Kachakata</option><option value="Bollobherkhas">Bollobherkhas</option>';
	}else if(upZila_list == 'Bhurungamari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Pathordubi">Pathordubi</option><option value="Shilkhuri">Shilkhuri</option><option value="Tilai">Tilai</option><option value="Paikarchara">Paikarchara</option><option value="Bhurungamari">Bhurungamari</option><option value="Joymonirhat">Joymonirhat</option><option value="Andharirjhar">Andharirjhar</option><option value="Charbhurungamari">Charbhurungamari</option><option value="Bangasonahat">Bangasonahat</option><option value="Boldia">Boldia</option>';
	}else if(upZila_list == 'Phulbari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nawdanga">Nawdanga</option><option value="Shimulbari">Shimulbari</option><option value="Phulbari">Phulbari</option><option value="Baravita">Baravita</option><option value="Bhangamor">Bhangamor</option><option value="Kashipur">Kashipur</option>';
	}else if(upZila_list == 'Rajarhat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chinai">Chinai</option><option value="Rajarhat">Rajarhat</option><option value="Nazimkhan">Nazimkhan</option><option value="Gharialdanga">Gharialdanga</option><option value="Chakirpashar">Chakirpashar</option><option value="Biddanondo">Biddanondo</option><option value="Umarmajid">Umarmajid</option>';
	}else if(upZila_list == 'Ulipur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Daldalia">Daldalia</option><option value="Durgapur">Durgapur</option><option value="Pandul">Pandul</option><option value="Buraburi">Buraburi</option><option value="Dharanibari">Dharanibari</option><option value="Dhamsreni">Dhamsreni</option><option value="Gunaigas">Gunaigas</option><option value="Bazra">Bazra</option><option value="Tobockpur">Tobockpur</option><option value="Hatia">Hatia</option><option value="Begumgonj">Begumgonj</option><option value="Shahabiaralga">Shahabiaralga</option><option value="Thetrai">Thetrai</option>';
	}else if(upZila_list == 'Chilmari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ranigonj">Ranigonj</option><option value="Nayarhat">Nayarhat</option><option value="Thanahat">Thanahat</option><option value="Ramna">Ramna</option><option value="Chilmari">Chilmari</option><option value="Austomirchar">Austomirchar</option>';
	}else if(upZila_list == 'Rowmari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dadevanga">Dadevanga</option><option value="Shoulemari">Shoulemari</option><option value="Bondober">Bondober</option><option value="Rowmari">Rowmari</option><option value="Jadurchar">Jadurchar</option><option value="Chorshoulemari">Chorshoulemari</option>';
	}else if(upZila_list == 'Charrajibpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajibpur">Rajibpur</option><option value="Kodalkati">Kodalkati</option><option value="Mohongonj">Mohongonj</option>';
	}
//
	else if(upZila_list == 'Rangpur sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mominpur">Mominpur</option><option value="Horidebpur">Horidebpur</option><option value="Uttam">Uttam</option><option value="Porshuram">Porshuram</option><option value="Topodhan">Topodhan</option><option value="Satgara">Satgara</option><option value="Rajendrapur">Rajendrapur</option><option value="Sadwapuskoroni">Sadwapuskoroni</option><option value="Chandanpat">Chandanpat</option><option value="Dorshona">Dorshona</option><option value="Tampat">Tampat</option><option value="Kholeya">Kholeya</option>';
	}else if(upZila_list == 'Gangachara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Betgari">Betgari</option><option value="Borobil">Borobil</option><option value="Kolcondo">Kolcondo</option><option value="Gongachora">Gongachora</option><option value="Gojoghonta">Gojoghonta</option><option value="Morneya">Morneya</option><option value="Lakkhitari">Lakkhitari</option><option value="Alambiditor">Alambiditor</option><option value="Nohali">Nohali</option>';
	}else if(upZila_list == 'Taragonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kurshatara">Kurshatara</option><option value="Alampur">Alampur</option><option value="Soyar">Soyar</option><option value="Ikorchali">Ikorchali</option><option value="Hariarkuthi">Hariarkuthi</option>';
	}else if(upZila_list == 'Badargonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Radhanagar">Radhanagar</option><option value="Gopinathpur">Gopinathpur</option><option value="Modhupur">Modhupur</option><option value="Kutubpur">Kutubpur</option><option value="Bishnapur">Bishnapur</option><option value="Kalupara">Kalupara</option><option value="Lohanipara">Lohanipara</option><option value="Gopalpur">Gopalpur</option><option value="Damodorpur">Damodorpur</option><option value="Ramnathpurupb">Ramnathpurupb</option>';
	}else if(upZila_list == 'Mithapukur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Khoragach">Khoragach</option><option value="Ranipukur">Ranipukur</option><option value="Payrabond">Payrabond</option><option value="Vangni">Vangni</option><option value="Balarhat">Balarhat</option><option value="Kafrikhal">Kafrikhal</option><option value="Latibpur">Latibpur</option><option value="Chengmari">Chengmari</option><option value="Moyenpur">Moyenpur</option><option value="Baluyamasimpur">Baluyamasimpur</option><option value="Borobala">Borobala</option><option value="Mirzapur">Mirzapur</option><option value="Imadpur">Imadpur</option><option value="Milonpur">Milonpur</option><option value="Mgopalpur">Mgopalpur</option><option value="Durgapur">Durgapur</option><option value="Borohazratpur">Borohazratpur</option>';
	}else if(upZila_list == 'Pirgonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chattracol">Chattracol</option><option value="Vendabari">Vendabari</option><option value="Borodargah">Borodargah</option><option value="Kumedpur">Kumedpur</option><option value="Modankhali">Modankhali</option><option value="Tukuria">Tukuria</option><option value="Boroalampur">Boroalampur</option><option value="Raypur">Raypur</option><option value="Pirgonj">Pirgonj</option><option value="Shanerhat">Shanerhat</option><option value="Mithipur">Mithipur</option><option value="Ramnathpurup1">Ramnathpurup1</option><option value="Chattra">Chattra</option><option value="Kabilpur">Kabilpur</option><option value="Pachgachi">Pachgachi</option>';
	}else if(upZila_list == 'Kaunia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sarai">Sarai</option><option value="Balapara">Balapara</option><option value="Shahidbag">Shahidbag</option><option value="Haragach">Haragach</option><option value="Tepamodhupur">Tepamodhupur</option><option value="Kurshaupk">Kurshaupk</option>';
	}else if(upZila_list == 'Pirgacha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kollyani">Kollyani</option><option value="Parul">Parul</option><option value="Itakumari">Itakumari</option><option value="Saula">Saula</option><option value="Kandi">Kandi</option><option value="Pirgacha">Pirgacha</option><option value="Annodanagar">Annodanagar</option><option value="Tambulpur">Tambulpur</option><option value="Koikuri">Koikuri</option>';
	}
//
	else if(upZila_list == 'Thakurgaon sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ruhea">Ruhea</option><option value="Akhanagar">Akhanagar</option><option value="Ahcha">Ahcha</option><option value="Baragaon">Baragaon</option><option value="Balia">Balia</option><option value="Auliapur">Auliapur</option><option value="Chilarang">Chilarang</option><option value="Rahimanpur">Rahimanpur</option><option value="Roypur">Roypur</option><option value="Jamalpur">Jamalpur</option><option value="Mohammadpur">Mohammadpur</option><option value="Salandar">Salandar</option><option value="Gareya">Gareya</option><option value="Rajagaon">Rajagaon</option><option value="Debipur">Debipur</option><option value="Nargun">Nargun</option><option value="Jagannathpur">Jagannathpur</option><option value="Sukhanpukhari">Sukhanpukhari</option><option value="Begunbari">Begunbari</option><option value="Ruhiapashchim">Ruhiapashchim</option><option value="Dholarhat">Dholarhat</option>';
	}else if(upZila_list == 'Pirganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhomradaha">Bhomradaha</option><option value="Kosharaniganj">Kosharaniganj</option><option value="Khangaon">Khangaon</option><option value="Saidpur">Saidpur</option><option value="Pirganj">Pirganj</option><option value="Hajipur">Hajipur</option><option value="Daulatpur">Daulatpur</option><option value="Sengaon">Sengaon</option><option value="Jabarhat">Jabarhat</option><option value="Bairchuna">Bairchuna</option>';
	}else if(upZila_list == 'Ranisankail'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dhormogarh">Dhormogarh</option><option value="Nekmorod">Nekmorod</option><option value="Hosengaon">Hosengaon</option><option value="Lehemba">Lehemba</option><option value="Bachor">Bachor</option><option value="Kashipur">Kashipur</option><option value="Ratore">Ratore</option><option value="Nonduar">Nonduar</option>';
	}else if(upZila_list == 'Haripur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gedura">Gedura</option><option value="Amgaon">Amgaon</option><option value="Bakua">Bakua</option><option value="Dangipara">Dangipara</option><option value="Haripur">Haripur</option><option value="Bhaturia">Bhaturia</option>';
	}else if(upZila_list == 'Baliadangi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Paria">Paria</option><option value="Charol">Charol</option><option value="Dhontola">Dhontola</option><option value="Boropalashbari">Boropalashbari</option><option value="Duosuo">Duosuo</option><option value="Vanor">Vanor</option><option value="Amjankhore">Amjankhore</option><option value="Borobari">Borobari</option>';
	}
//
	else if(upZila_list == 'Sadullapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rasulpur">Rasulpur</option><option value="Noldanga">Noldanga</option><option value="Damodorpur">Damodorpur</option><option value="Jamalpur">Jamalpur</option><option value="Faridpur">Faridpur</option><option value="Dhaperhat">Dhaperhat</option><option value="Idilpur">Idilpur</option><option value="Vatgram">Vatgram</option><option value="Bongram">Bongram</option><option value="Kamarpara">Kamarpara</option><option value="Khodkomor">Khodkomor</option>';
	}else if(upZila_list == 'Gaibandha sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Laxmipur">Laxmipur</option><option value="Malibari">Malibari</option><option value="Kuptola">Kuptola</option><option value="Shahapara">Shahapara</option><option value="Ballamjhar">Ballamjhar</option><option value="Ramchandrapur">Ramchandrapur</option><option value="Badiakhali">Badiakhali</option><option value="Boali">Boali</option><option value="Ghagoa">Ghagoa</option><option value="Gidari">Gidari</option><option value="Kholahati">Kholahati</option><option value="Mollarchar">Mollarchar</option><option value="Kamarjani">Kamarjani</option>';
	}else if(upZila_list == 'Palashbari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kishoregari">Kishoregari</option><option value="Hosenpur">Hosenpur</option><option value="Palashbari">Palashbari</option><option value="Barisal">Barisal</option><option value="Mohdipur">Mohdipur</option><option value="Betkapa">Betkapa</option><option value="Pobnapur">Pobnapur</option><option value="Monohorpur">Monohorpur</option><option value="Harinathpur">Harinathpur</option>';
	}else if(upZila_list == 'Saghata'){
		var union_list = '<option disabled selected>Select Union</option><option value="Padumsahar">Padumsahar</option><option value="Varotkhali">Varotkhali</option><option value="Saghata">Saghata</option><option value="Muktinagar">Muktinagar</option><option value="Kachua">Kachua</option><option value="Ghuridah">Ghuridah</option><option value="Holdia">Holdia</option><option value="Jumarbari">Jumarbari</option><option value="Kamalerpara">Kamalerpara</option><option value="Bonarpara">Bonarpara</option>';
	}else if(upZila_list == 'Gobindaganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kamdia">Kamdia</option><option value="Katabari">Katabari</option><option value="Shakhahar">Shakhahar</option><option value="Rajahar">Rajahar</option><option value="Sapmara">Sapmara</option><option value="Dorbosto">Dorbosto</option><option value="Talukkanupur">Talukkanupur</option><option value="Nakai">Nakai</option><option value="Harirampur">Harirampur</option><option value="Rakhalburuj">Rakhalburuj</option><option value="Phulbari">Phulbari</option><option value="Gumaniganj">Gumaniganj</option><option value="Kamardoho">Kamardoho</option><option value="Kochasahar">Kochasahar</option><option value="Shibpur">Shibpur</option><option value="Mahimaganj">Mahimaganj</option><option value="Shalmara">Mahimaganj</option>';
	}else if(upZila_list == 'Sundarganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bamondanga">Bamondanga</option><option value="Sonaroy">Sonaroy</option><option value="Tarapur">Tarapur</option><option value="Belka">Belka</option><option value="Dohbond">Dohbond</option><option value="Sorbanondo">Sorbanondo</option><option value="Ramjibon">Ramjibon</option><option value="Dhopadanga">Dhopadanga</option><option value="Chaporhati">Chaporhati</option><option value="Shantiram">Shantiram</option><option value="Konchibari">Konchibari</option><option value="Sreepur">Sreepur</option><option value="Chandipur">Chandipur</option><option value="Kapasia">Kapasia</option><option value="Haripur">Haripur</option>';
	}else if(upZila_list == 'Phulchari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kanchipara">Kanchipara</option><option value="Uria">Uria</option><option value="Udakhali">Udakhali</option><option value="Gazaria">Gazaria</option><option value="Phulchari">Phulchari</option><option value="Erendabari">Erendabari</option><option value="Fazlupur">Fazlupur</option>';
	}

	else if(upZila_list == 'Syedpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kamarpukur">Kamarpukur</option><option value="Kasirambelpukur">Kasirambelpukur</option><option value="Bangalipur">Bangalipur</option><option value="Botlagari">Botlagari</option><option value="Khatamadhupur">Khatamadhupur</option>';
	}else if(upZila_list == 'Domar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gomnati">Gomnati</option><option value="Bhogdaburi">Bhogdaburi</option><option value="Ketkibari">Ketkibari</option><option value="Jorabari">Jorabari</option><option value="Bamunia">Bamunia</option><option value="Pangamotukpur">Pangamotukpur</option><option value="Boragari">Boragari</option><option value="Domar">Domar</option><option value="Sonarayup2">Sonarayup2</option><option value="Harinchara">Harinchara</option>';
	}else if(upZila_list == 'Dimla'){
		var union_list = '<option disabled selected>Select Union</option><option value="Paschimchhatnay">Paschimchhatnay</option><option value="Balapara">Balapara</option><option value="Dimlasadar">Dimlasadar</option><option value="Khogakharibari">Khogakharibari</option><option value="Gayabari">Gayabari</option><option value="Noutara">Noutara</option><option value="Khalishachapani">Khalishachapani</option><option value="Jhunagachhchapani">Jhunagachhchapani</option><option value="Tepakhribari">Tepakhribari</option><option value="Purbachhatnay">Purbachhatnay</option>';
	}else if(upZila_list == 'Jaldhaka'){
		var union_list = '<option disabled selected>Select Union</option><option value="Douabari">Douabari</option><option value="Golmunda">Golmunda</option><option value="Balagram">Balagram</option><option value="Golna">Golna</option><option value="Dharmapal">Dharmapal</option><option value="Simulbari">Simulbari</option><option value="Mirganj">Mirganj</option><option value="Kathali">Kathali</option><option value="Khutamara">Khutamara</option><option value="Shaulmari">Shaulmari</option><option value="Kaimari">Kaimari</option>';
	}else if(upZila_list == 'Kishorganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barabhita">Barabhita</option><option value="Putimari">Putimari</option><option value="Nitai">Nitai</option><option value="Bahagili">Bahagili</option><option value="Chandkhana">Chandkhana</option><option value="Kishoreganj">Kishoreganj</option><option value="Ranachandi">Ranachandi</option><option value="Garagram">Garagram</option><option value="Magura">Magura</option>';
	}else if(upZila_list == 'Nilphamarisadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chaorabargacha">Chaorabargacha</option><option value="Gorgram">Gorgram</option><option value="Khoksabari">Khoksabari</option><option value="Palasbari">Palasbari</option><option value="Ramnagar">Ramnagar</option><option value="Kachukata">Kachukata</option><option value="Panchapukur">Panchapukur</option><option value="Itakhola">Itakhola</option><option value="Kundapukur">Kundapukur</option><option value="Sonaray">Sonaray</option><option value="Songalsi">Songalsi</option><option value="Charaikhola">Charaikhola</option><option value="Chaprasarnjami">Chaprasarnjami</option><option value="Lakshmicha">Lakshmicha</option><option value="Tupamari">Tupamari</option>';
	}
//
	else if(upZila_list == 'Lalmonirhat Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajpur">Rajpur</option><option value="Harati">Harati</option><option value="Mogolhat">Mogolhat</option><option value="Gokunda">Gokunda</option><option value="Barobari">Barobari</option><option value="Kulaghat">Kulaghat</option><option value="Mohendranagar">Mohendranagar</option><option value="Khuniagachh">Khuniagachh</option><option value="Panchagram">Panchagram</option>';
	}else if(upZila_list == 'Kaliganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhotmari">Bhotmari</option><option value="Modati">Modati</option><option value="Dologram">Dologram</option><option value="Tushbhandar">Tushbhandar</option><option value="Goral">Goral</option><option value="Chondropur">Chondropur</option><option value="Cholbola">Cholbola</option><option value="Kakina">Kakina</option>';
	}else if(upZila_list == 'Hatibandha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barokhata">Barokhata</option><option value="Goddimari">Goddimari</option><option value="Singimari">Singimari</option><option value="Tongvhanga">Tongvhanga</option><option value="Sindurna">Sindurna</option><option value="Paticapara">Paticapara</option><option value="Nowdabas">Nowdabas</option><option value="Gotamari">Gotamari</option><option value="Vhelaguri">Vhelaguri</option><option value="Shaniajan">Shaniajan</option><option value="Fakirpara">Fakirpara</option><option value="Dawabari">Dawabari</option>';
	}else if(upZila_list == 'Patgram'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sreerampur">Sreerampur</option><option value="Patgram">Patgram</option><option value="Jagatber">Jagatber</option><option value="Kuchlibari">Kuchlibari</option><option value="Jongra">Jongra</option><option value="Baura">Baura</option><option value="Dahagram">Dahagram</option><option value="Burimari">Burimari</option>';
	}else if(upZila_list == 'Aditmari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhelabari">Bhelabari</option><option value="Bhadai">Bhadai</option><option value="Kamlabari">Kamlabari</option><option value="Durgapur">Durgapur</option><option value="Sarpukur">Sarpukur</option><option value="Saptibari">Saptibari</option><option value="Palashi">Palashi</option><option value="Mohishkhocha">Mohishkhocha</option>';
	}
//
	else if(upZila_list == 'Nawabganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Joypur">Joypur</option><option value="Binodnagar">Binodnagar</option><option value="Golapgonj">Golapgonj</option><option value="Shalkhuria">Shalkhuria</option><option value="Putimara">Putimara</option><option value="Bhaduria">Bhaduria</option><option value="Daudpur">Daudpur</option><option value="Mahmudpur">Mahmudpur</option><option value="Kushdaha">Kushdaha</option>';
	}else if(upZila_list == 'Birganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shibrampur">Shibrampur</option><option value="Polashbariup2">Polashbariup2</option><option value="Shatagram">Shatagram</option><option value="Paltapur">Paltapur</option><option value="Sujalpur">Sujalpur</option><option value="Nijpara">Nijpara</option><option value="Mohammadpur">Mohammadpur</option><option value="Bhognagar">Bhognagar</option><option value="Sator">Sator</option><option value="Mohonpur">Mohonpur</option><option value="Moricha">Moricha</option>';
	}else if(upZila_list == 'Ghoraghat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bulakipur">Bulakipur</option><option value="Palsha">Palsha</option><option value="Singra">Singra</option><option value="Ghoraghat">Ghoraghat</option>';
	}else if(upZila_list == 'Birampur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mukundopur">Mukundopur</option><option value="Katla">Katla</option><option value="Khanpur">Khanpur</option><option value="Dior">Dior</option><option value="Binail">Binail</option><option value="Jatbani">Jatbani</option><option value="Poliproyagpur">Poliproyagpur</option>';
	}else if(upZila_list == 'Parbatipur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Belaichandi">Belaichandi</option><option value="Monmothopur">Monmothopur</option><option value="Rampur">Rampur</option><option value="Polashbariup4">Polashbariup4</option><option value="Chandipur">Chandipur</option><option value="Mominpur">Mominpur</option><option value="Mostofapur">Mostofapur</option><option value="Habra">Habra</option><option value="Hamidpur">Hamidpur</option><option value="Harirampur">Harirampur</option>';
	}else if(upZila_list == 'Bochaganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nafanagar">Nafanagar</option><option value="Eshania">Eshania</option><option value="Atgaon">Atgaon</option><option value="Shatail">Shatail</option><option value="Rongaon">Rongaon</option><option value="Murshidhat">Murshidhat</option>';
	}else if(upZila_list == 'Kaharol'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dabor">Dabor</option><option value="Rasulpur">Rasulpur</option><option value="Mukundapur">Mukundapur</option><option value="Targao">Targao</option><option value="Ramchandrapur">Ramchandrapur</option><option value="Sundarpur">Sundarpur</option>';
	}else if(upZila_list == 'Fulbari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Aloary">Aloary</option><option value="Aladipur">Aladipur</option><option value="Kagihal">Kagihal</option><option value="Bethdighi">Bethdighi</option><option value="Khairbari">Khairbari</option><option value="Daulatpur">Daulatpur</option><option value="Shibnagor">Shibnagor</option>';
	}else if(upZila_list == 'Dinajpur sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chealgazi">Chealgazi</option><option value="Sundorbon">Sundorbon</option><option value="Fazilpur">Fazilpur</option><option value="Shekpura">Shekpura</option><option value="Shashora">Shashora</option><option value="Auliapur">Auliapur</option><option value="Uthrail">Uthrail</option><option value="Sankarpur">Sankarpur</option><option value="Askorpur">Askorpur</option><option value="Kamalpur">Kamalpur</option>';
	}else if(upZila_list == 'Hakimpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alihat">Alihat</option><option value="Khattamadobpara">Khattamadobpara</option><option value="Boalder">Boalder</option>';
	}else if(upZila_list == 'Khansama'){
		var union_list = '<option disabled selected>Select Union</option><option value="Alokjhari">Alokjhari</option><option value="Bherbheri">Bherbheri</option><option value="Angarpara">Angarpara</option><option value="Goaldihi">Goaldihi</option><option value="Bhabki">Bhabki</option><option value="Khamarpara">Khamarpara</option>';
	}else if(upZila_list == 'Birol'){
		var union_list = '<option disabled selected>Select Union</option><option value="Azimpur">Azimpur</option><option value="Farakkabad">Farakkabad</option><option value="Dhamoir">Dhamoir</option><option value="Shohorgram">Shohorgram</option><option value="Birol">Birol</option><option value="Bhandra">Bhandra</option><option value="Bijora">Bijora</option><option value="Dharmapur">Dharmapur</option><option value="Mongalpur">Mongalpur</option><option value="Ranipukur">Ranipukur</option><option value="Rajarampur">Rajarampur</option>';
	}else if(upZila_list == 'Chirirbandar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nashratpur">Nashratpur</option><option value="Satnala">Satnala</option><option value="Fatejangpur">Fatejangpur</option><option value="Isobpur">Isobpur</option><option value="Abdulpur">Abdulpur</option><option value="Amarpur">Amarpur</option><option value="Auliapukur">Auliapukur</option><option value="Saitara">Saitara</option><option value="Viail">Viail</option><option value="Punotti">Punotti</option><option value="Tetulia">Tetulia</option><option value="Alokdihi">Alokdihi</option>';
	}
//
	else if(upZila_list == 'Panchagarh sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Panchagarhsadar">Panchagarhsadar</option><option value="Satmara">Satmara</option><option value="Amarkhana">Amarkhana</option><option value="Haribhasa">Haribhasa</option><option value="Chaklahat">Chaklahat</option><option value="Hafizabad">Hafizabad</option><option value="Kamatkajoldighi">Kamatkajoldighi</option><option value="Dhakkamara">Dhakkamara</option><option value="Magura">Magura</option><option value="Garinabari">Garinabari</option>';
	}else if(upZila_list == 'Debiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chilahati">Chilahati</option><option value="Shaldanga">Shaldanga</option><option value="Debiganjsadar">Debiganjsadar</option><option value="Pamuli">Pamuli</option><option value="Sundardighi">Sundardighi</option><option value="Sonaharmollikadaha">Sonaharmollikadaha</option><option value="Tepriganj">Tepriganj</option><option value="Dandopal">Dandopal</option><option value="Debiduba">Debiduba</option><option value="Chengthihazradanga">Chengthihazradanga</option>';
	}else if(upZila_list == 'Boda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jholaishalshiri">Jholaishalshiri</option><option value="Moidandighi">Moidandighi</option><option value="Banghari">Banghari</option><option value="Kajoldighikaligonj">Kajoldighikaligonj</option><option value="Boroshoshi">Boroshoshi</option><option value="Chandanbari">Chandanbari</option><option value="Mareabamonhat">Mareabamonhat</option><option value="Boda">Boda</option><option value="Sakoa">Sakoa</option><option value="Pachpir">Pachpir</option>';
	}else if(upZila_list == 'Atwari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mirgapur">Mirgapur</option><option value="Radhanagar">Radhanagar</option><option value="Toria">Toria</option><option value="Balarampur">Balarampur</option><option value="Alowakhowa">Alowakhowa</option><option value="Dhamor">Dhamor</option>';
	}else if(upZila_list == 'Tetulia'){
		var union_list = '<option disabled selected>Select Union</option><option value="Banglabandha">Banglabandha</option><option value="Bhojoanpur">Bhojoanpur</option><option value="Buraburi">Buraburi</option><option value="Buraburi">Buraburi</option><option value="Debnagar">Debnagar</option><option value="Salbahan">Salbahan</option><option value="Tentulia">Tentulia</option><option value="Timaihat">Timaihat</option>';
	}
//

	else if(upZila_list == 'Sunamganj Sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jahangirnagar">Jahangirnagar</option><option value="Rangarchar">Rangarchar</option><option value="Aptabnagar">Aptabnagar</option><option value="Gourarang">Gourarang</option><option value="Mollapara">Mollapara</option><option value="Laxmansree">Laxmansree</option><option value="Kathair">Kathair</option><option value="Surma">Surma</option><option value="Mohonpur">Mohonpur</option>';
	}else if(upZila_list == 'Southsunamganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shimulbak">Shimulbak</option><option value="Paschimpagla">Paschimpagla</option><option value="Joykalash">Joykalash</option><option value="Purbapagla">Purbapagla</option><option value="Patharia">Patharia</option><option value="Purbabirgaon">Purbabirgaon</option><option value="Dargapasha">Dargapasha</option><option value="Paschimbirgaon">Paschimbirgaon</option>';
	}else if(upZila_list == 'Bishwambarpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Palash">Palash</option><option value="Solukabad">Solukabad</option><option value="Dhanpur">Dhanpur</option><option value="Badaghatsouth">Badaghatsouth</option><option value="Fatepur">Fatepur</option>';
	}else if(upZila_list == 'Chhatak'){
		var union_list = '<option disabled selected>Select Union</option><option value="Islampur">Islampur</option><option value="Noarai">Noarai</option><option value="Chhataksadar">Chhataksadar</option><option value="Kalaruka">Kalaruka</option><option value="Gobindganjsyedergaon">Gobindganjsyedergaon</option><option value="Chhailaafjalabad">Chhailaafjalabad</option><option value="Khurmanorth">Khurmanorth</option><option value="Khurmasouth">Khurmasouth</option><option value="Chormohalla">Chormohalla</option><option value="Jauwabazar">Jauwabazar</option><option value="Singchapair">Singchapair</option><option value="Dolarbazar">Dolarbazar</option><option value="Bhatgaon">Bhatgaon</option>';
	}else if(upZila_list == 'Jagannathpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kolkolia">Kolkolia</option><option value="Patli">Patli</option><option value="Mirpur">Mirpur</option><option value="Chilauraholdipur">Chilauraholdipur</option><option value="Raniganj">Raniganj</option><option value="Syedpurshaharpara">Syedpurshaharpara</option><option value="Asharkandi">Asharkandi</option><option value="Pailgaon">Pailgaon</option>';
	}else if(upZila_list == 'Dowarabazar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Banglabazar">Banglabazar</option><option value="Norsingpur">Norsingpur</option><option value="Dowarabazar">Dowarabazar</option><option value="Mannargaon">Mannargaon</option><option value="Pandargaon">Pandargaon</option><option value="Dohalia">Dohalia</option><option value="Laxmipur">Laxmipur</option><option value="Boglabazar">Boglabazar</option><option value="Surma2">Surma2</option>';
	}else if(upZila_list == 'Tahirpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sreepurnorth">Sreepurnorth</option><option value="Sreepursouth">Sreepursouth</option><option value="Bordalsouth">Bordalsouth</option><option value="Bordalnorth">Bordalnorth</option><option value="Badaghat">Badaghat</option><option value="Tahirpursadar">Tahirpursadar</option><option value="Balijuri">Balijuri</option>';
	}else if(upZila_list == 'Dharmapasha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bongshikundanorth">Bongshikundanorth</option><option value="Bongshikundasouth">Bongshikundasouth</option><option value="Chamordani">Chamordani</option><option value="Madhyanagar">Madhyanagar</option><option value="Paikurati">Paikurati</option><option value="Selbarash">Selbarash</option><option value="Dharmapashasadar">Dharmapashasadar</option><option value="Joyasree">Joyasree</option><option value="Sukhairrajapurnorth">Sukhairrajapurnorth</option><option value="Sukhairrajapursouth">Sukhairrajapursouth</option>';
	}else if(upZila_list == 'Jamalganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Beheli">Beheli</option><option value="Sachnabazar">Sachnabazar</option><option value="Bhimkhali">Bhimkhali</option><option value="Fenerbak">Fenerbak</option><option value="Jamalganjsadar">Jamalganjsadar</option>';
	}else if(upZila_list == 'Shalla'){
		var union_list = '<option disabled selected>Select Union</option><option value="Atgaon">Atgaon</option><option value="Habibpur">Habibpur</option><option value="Bahara">Bahara</option><option value="Shallasadar">Shallasadar</option>';
	}else if(upZila_list == 'Derai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rafinagar">Rafinagar</option><option value="Bhatipara">Bhatipara</option><option value="Rajanagar">Rajanagar</option><option value="Charnarchar">Charnarchar</option><option value="Deraisarmangal">Deraisarmangal</option><option value="Karimpur">Karimpur</option><option value="Jagddol">Jagddol</option><option value="Taral">Taral</option><option value="Kulanj">Kulanj</option>';
	}
//
	else if(upZila_list == 'Nabiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Barabhakoirpaschim">Barabhakoirpaschim</option><option value="Barabhakoirpurba">Barabhakoirpurba</option><option value="Inatganj">Inatganj</option><option value="Digholbak">Digholbak</option><option value="Aushkandi">Aushkandi</option><option value="Kurshi">Kurshi</option><option value="Kargoan">Kargoan</option><option value="Nabiganjsadar">Nabiganjsadar</option><option value="Bausha">Bausha</option><option value="Debparra">Debparra</option><option value="Gaznaipur">Gaznaipur</option><option value="Kaliarbhanga">Kaliarbhanga</option><option value="Paniumda">Paniumda</option>';
	}else if(upZila_list == 'Bahubal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Snanghat">Snanghat</option><option value="Putijuri">Putijuri</option><option value="Satkapon">Satkapon</option><option value="Bahubalsadar">Bahubalsadar</option><option value="Lamatashi">Lamatashi</option><option value="Mirpur">Mirpur</option><option value="Bhadeshwar">Bhadeshwar</option>';
	}else if(upZila_list == 'Ajmiriganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shibpasha">Shibpasha</option><option value="Kakailsao">Kakailsao</option><option value="Ajmiriganjsadar">Ajmiriganjsadar</option><option value="Badolpur">Badolpur</option><option value="Jolsuka">Jolsuka</option>';
	}else if(upZila_list == 'Baniachong'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baniachongnortheast">Baniachongnortheast</option><option value="Baniachongnorthwest">Baniachongnorthwest</option><option value="Baniachongsoutheast">Baniachongsoutheast</option><option value="Baniachongsouthwest">Baniachongsouthwest</option><option value="Daulatpur">Daulatpur</option><option value="Khagaura">Khagaura</option><option value="Baraiuri">Baraiuri</option><option value="Kagapasha">Kagapasha</option><option value="Pukra">Pukra</option><option value="Subidpur">Subidpur</option><option value="Makrampur">Makrampur</option><option value="Sujatpur">Sujatpur</option><option value="Mandari">Mandari</option><option value="Muradpur">Muradpur</option><option value="Pailarkandi">Pailarkandi</option>';
	}else if(upZila_list == 'Lakhai'){
		var union_list = '<option disabled selected>Select Union</option><option value="Lakhai">Lakhai</option><option value="Murakari">Murakari</option><option value="Muriauk">Muriauk</option><option value="Bamoi">Bamoi</option><option value="Karab">Karab</option><option value="Bullaup6">Bullaup6</option>';
	}else if(upZila_list == 'Chunarughat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gazipur">Gazipur</option><option value="Ahammadabad">Ahammadabad</option><option value="Deorgach">Deorgach</option><option value="Paikpara">Paikpara</option><option value="Shankhala">Shankhala</option><option value="Chunarughat">Chunarughat</option><option value="Ubahata">Ubahata</option><option value="Shatiajuri">Shatiajuri</option><option value="Ranigaon">Ranigaon</option><option value="Mirashi">Mirashi</option>';
	}else if(upZila_list == 'Habiganj sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Lukra">Lukra</option><option value="Richi">Richi</option><option value="Teghoria">Teghoria</option><option value="Poil">Poil</option><option value="Gopaya">Gopaya</option><option value="Rajiura">Rajiura</option><option value="Nijampur">Nijampur</option><option value="Laskerpur">Laskerpur</option>';
	}else if(upZila_list == 'Madhabpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dharmaghar">Dharmaghar</option><option value="Choumohani">Choumohani</option><option value="Bahara">Bahara</option><option value="Adaoir">Adaoir</option><option value="Andiura">Andiura</option><option value="Shahjahanpur">Shahjahanpur</option><option value="Jagadishpur">Jagadishpur</option><option value="Bulla">Bulla</option><option value="Noapara">Noapara</option><option value="Chhatiain">Chhatiain</option><option value="Bagashura">Bagashura</option>';
	}else if(upZila_list == 'Shayestaganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nurpur">Nurpur</option><option value="Shayestaganj">Shayestaganj</option><option value="Brahmandura">Brahmandura</option>';
	}
//
	else if(upZila_list == 'Balaganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tazpur">Tazpur</option><option value="Umorpur">Umorpur</option><option value="Westpoilanpur">Westpoilanpur</option><option value="Eastpoilanpur">Eastpoilanpur</option><option value="Boaljur">Boaljur</option><option value="Burungabazar">Burungabazar</option><option value="Goalabazar">Goalabazar</option><option value="Doyamir">Doyamir</option><option value="Usmanpur">Usmanpur</option><option value="Dewanbazar">Dewanbazar</option><option value="Westgouripur">Westgouripur</option><option value="Eastgouripur">Eastgouripur</option><option value="Balaganj">Balaganj</option><option value="Sadipur">Sadipur</option>';
	}else if(upZila_list == 'Bishwanath'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rampasha">Rampasha</option><option value="Lamakazi">Lamakazi</option><option value="Khajanchi">Khajanchi</option><option value="Alankari">Alankari</option><option value="Dewkalash">Dewkalash</option><option value="Bishwanath">Bishwanath</option><option value="Doshghar">Doshghar</option><option value="Daulatpur">Daulatpur</option>';
	}else if(upZila_list == 'Beanibazar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Tilpara">Tilpara</option><option value="Alinagar">Alinagar</option><option value="Charkhai">Charkhai</option><option value="Dubag">Dubag</option><option value="Sheola">Sheola</option><option value="Kurarbazar">Kurarbazar</option><option value="Mathiura">Mathiura</option><option value="Mullapur">Mullapur</option><option value="Muria">Muria</option><option value="Lauta">Lauta</option>';
	}else if(upZila_list == 'Companiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Telikhal">Telikhal</option><option value="Islampurpaschim">Islampurpaschim</option><option value="Islampurpurba">Islampurpurba</option><option value="Isakalas">Isakalas</option><option value="Uttorronikhai">Uttorronikhai</option><option value="Dakkinronikhai">Dakkinronikhai</option>';
	}else if(upZila_list == 'Fenchuganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ghilachora">Ghilachora</option><option value="1nofenchuganj">1nofenchuganj</option><option value="Uttarkushiara">Uttarkushiara</option><option value="Uttarfenchuganj">Uttarfenchuganj</option><option value="Maijgaon">Maijgaon</option>';
	}else if(upZila_list == 'Golapganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Golapganj">Golapganj</option><option value="Fulbari">Fulbari</option><option value="Lakshmipasha">Lakshmipasha</option><option value="Budhbaribazar">Budhbaribazar</option><option value="Dhakadakshin">Dhakadakshin</option><option value="Sharifganj">Sharifganj</option><option value="Uttarbadepasha">Uttarbadepasha</option><option value="Lakshanaband">Lakshanaband</option><option value="Bhadeshwar">Bhadeshwar</option><option value="Westamura">Westamura</option>';
	}else if(upZila_list == 'Gowainghat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fothepur">Fothepur</option><option value="Rustampur">Rustampur</option><option value="Paschimjaflong">Paschimjaflong</option><option value="Purbajaflong">Purbajaflong</option><option value="Lengura">Lengura</option><option value="Alirgaon">Alirgaon</option><option value="Nandirgaon">Nandirgaon</option><option value="Towakul">Towakul</option><option value="Daubari">Daubari</option>';
	}else if(upZila_list == 'Jaintiapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Nijpat">Nijpat</option><option value="Jaintapur">Jaintapur</option><option value="Charikatha">Charikatha</option><option value="Darbast">Darbast</option><option value="Fatehpur">Fatehpur</option><option value="Chiknagul">Chiknagul</option>';
	}else if(upZila_list == 'Kanaighat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rajagonj">Rajagonj</option><option value="Lakshiprashadpurbo">Lakshiprashadpurbo</option><option value="Lakshiprashadpashim">Lakshiprashadpashim</option><option value="Digirparpurbo">Digirparpurbo</option><option value="Satbakh">Satbakh</option><option value="Barachotul">Barachotul</option><option value="Kanaighat">Kanaighat</option><option value="Dakhinbanigram">Dakhinbanigram</option><option value="Jinghabari">Jinghabari</option>';
	}else if(upZila_list == 'Sylhet sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jalalabad">Jalalabad</option><option value="Hatkhula">Hatkhula</option><option value="Khadimnagar">Khadimnagar</option><option value="Khadimpara">Khadimpara</option><option value="Tultikor">Tultikor</option><option value="Tukerbazar">Tukerbazar</option><option value="Mugolgaon">Mugolgaon</option><option value="Kandigaon">Kandigaon</option>';
	}else if(upZila_list == 'Zakiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Manikpur">Manikpur</option><option value="Sultanpur">Sultanpur</option><option value="Barohal">Barohal</option><option value="Birorsri">Birorsri</option><option value="Kajalshah">Kajalshah</option><option value="Kolachora">Kolachora</option><option value="Zakiganj">Zakiganj</option><option value="Barothakuri">Barothakuri</option><option value="Kaskanakpur">Kaskanakpur</option>';
	}else if(upZila_list == 'Dakshinsurma'){
		var union_list = '<option disabled selected>Select Union</option><option value="Lalabazar">Lalabazar</option><option value="Moglabazar">Moglabazar</option><option value="Boroikandi">Boroikandi</option><option value="Silam">Silam</option><option value="Daudpur">Daudpur</option><option value="Mollargaon">Mollargaon</option><option value="Kuchai">Kuchai</option><option value="Kamalbazar">Kamalbazar</option><option value="Jalalpur">Jalalpur</option><option value="Tetli">Tetli</option>=';
	}else if(upZila_list == 'Osmaninagar'){
		var union_list = 'Null';
	}
//
	else if(upZila_list == 'Barlekha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Talimpur">Talimpur</option><option value="Borni">Borni</option><option value="Dasherbazar">Dasherbazar</option><option value="Nizbahadurpur">Nizbahadurpur</option><option value="Shahbajpuruttar">Shahbajpuruttar</option><option value="Shahbajpurdakshin">Shahbajpurdakshin</option><option value="Talimpur">Talimpur</option><option value="Baralekha">Baralekha</option><option value="Dakshinbhaguttar">Dakshinbhaguttar</option><option value="Dakshinbhagdakshin">Dakshinbhagdakshin</option><option value="Sujanagar">Sujanagar</option>';
	}else if(upZila_list == 'Kamolganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Adampur">Adampur</option><option value="Patanushar">Patanushar</option><option value="Madhabpur">Madhabpur</option><option value="Rahimpur">Rahimpur</option><option value="Shamshernagar">Shamshernagar</option><option value="Kamalgonj">Kamalgonj</option><option value="Islampur">Islampur</option><option value="Munshibazarup3">Munshibazarup3</option><option value="Alinagar">Alinagar</option>';
	}else if(upZila_list == 'Kulaura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Baramchal">Baramchal</option><option value="Bhukshimail">Bhukshimail</option><option value="Joychandi">Joychandi</option><option value="Brammanbazar">Brammanbazar</option><option value="Kadipur">Kadipur</option><option value="Kulaura">Kulaura</option><option value="Rauthgaon">Rauthgaon</option><option value="Tilagaon">Tilagaon</option><option value="Sharifpur">Sharifpur</option><option value="Prithimpassa">Prithimpassa</option><option value="Kormodha">Kormodha</option><option value="Bhatera">Bhatera</option><option value="Hazipur">Hazipur</option>';
	}else if(upZila_list == 'Moulvibazar sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Amtail">Amtail</option><option value="Khalilpur">Khalilpur</option><option value="Monumukh">Monumukh</option><option value="Kamalpur">Kamalpur</option><option value="Uparkagabala">Uparkagabala</option><option value="Akhailkura">Akhailkura</option><option value="Ekatuna">Ekatuna</option><option value="Chadnighat">Chadnighat</option><option value="Konokpur">Konokpur</option><option value="Nazirabad">Nazirabad</option><option value="Mostafapur">Mostafapur</option><option value="Giasnagar">Giasnagar</option>';
	}else if(upZila_list == 'Rajnagar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fotepur">Fotepur</option><option value="Uttorbhag">Uttorbhag</option><option value="Munsibazar">Munsibazar</option><option value="Panchgaon">Panchgaon</option><option value="Rajnagar">Rajnagar</option><option value="Tengra">Tengra</option><option value="Kamarchak">Kamarchak</option><option value="Munsurnagar">Munsurnagar</option>';
	}else if(upZila_list == 'Sreemangal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Mirzapur">Mirzapur</option><option value="Bhunabir">Bhunabir</option><option value="Sreemangal">Sreemangal</option><option value="Sindurkhan">Sindurkhan</option><option value="Kalapur">Kalapur</option><option value="Ashidron">Ashidron</option><option value="Rajghat">Rajghat</option><option value="Kalighat">Kalighat</option><option value="Satgaon">Satgaon</option>';
	}else if(upZila_list == 'Juri'){
		var union_list = '<option disabled selected>Select Union</option><option value="Jafornagar">Jafornagar</option><option value="Westjuri">Westjuri</option><option value="Gualbari">Gualbari</option><option value="Sagornal">Sagornal</option><option value="Fultola">Fultola</option><option value="Eastjuri">Eastjuri</option>';
	}
//
	else if(upZila_list == 'Sherpur sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kamararchor">Kamararchor</option><option value="Chorsherpur">Chorsherpur</option><option value="Bajitkhila">Bajitkhila</option><option value="Gajirkhamar">Gajirkhamar</option><option value="Dhola">Dhola</option><option value="Pakuriya">Pakuriya</option><option value="Vatshala">Vatshala</option><option value="Losmonpur">Losmonpur</option><option value="Rouha">Rouha</option><option value="Kamariya">Kamariya</option><option value="Chormochoriya">Chormochoriya</option><option value="Chorpokhimari">Chorpokhimari</option><option value="Betmarighughurakandi">Betmarighughurakandi</option><option value="Balairchar">Balairchar</option>';
	}else if(upZila_list == 'Nalitabari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Puraga">Puraga</option><option value="Nonni">Nonni</option><option value="Morichpuran">Morichpuran</option><option value="Rajnogor">Rajnogor</option><option value="Nayabil">Nayabil</option><option value="Ramchondrokura">Ramchondrokura</option><option value="Kakorkandhi">Kakorkandhi</option><option value="Nalitabari">Nalitabari</option><option value="Juganiya">Juganiya</option><option value="Bagber">Bagber</option><option value="Koloshpar">Koloshpar</option><option value="Rupnarayankura">Rupnarayankura</option>';
	}else if(upZila_list == 'Sreebordi'){
		var union_list = '<option disabled selected>Select Union</option><option value="Ranishimul">Ranishimul</option><option value="Singabaruna">Singabaruna</option><option value="Kakilakura">Kakilakura</option><option value="Tatihati">Tatihati</option><option value="Gosaipur">Gosaipur</option><option value="Sreebordi">Sreebordi</option><option value="Bhelua">Bhelua</option><option value="Khariakazirchar">Khariakazirchar</option><option value="Kurikahonia">Kurikahonia</option><option value="Garjaripa">Garjaripa</option>';
	}else if(upZila_list == 'Nokla'){
		var union_list = '<option disabled selected>Select Union</option><option value="Gonopoddi">Gonopoddi</option><option value="Nokla">Nokla</option><option value="Urpha">Urpha</option><option value="Gourdwar">Gourdwar</option><option value="Baneshwardi">Baneshwardi</option><option value="Pathakata">Pathakata</option><option value="Talki">Talki</option><option value="Choraustadhar">Choraustadhar</option><option value="Chandrakona">Chandrakona</option>';
	}else if(upZila_list == 'Jhenaigati'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kansa">Kansa</option><option value="Dansail">Dansail</option><option value="Nolkura">Nolkura</option><option value="Gouripur">Gouripur</option><option value="Jhenaigati">Jhenaigati</option><option value="Hatibandha">Hatibandha</option><option value="Malijhikanda">Malijhikanda</option>';
	}
//
	else if(upZila_list == 'Fulbaria'){
		var union_list = '<option disabled selected>Select Union</option><option value="Deukhola">Deukhola</option><option value="Naogaon">Naogaon</option><option value="Putijana">Putijana</option><option value="Kushmail">Kushmail</option><option value="Fulbaria">Fulbaria</option><option value="Bakta">Bakta</option><option value="Rangamatia">Rangamatia</option><option value="Enayetpur">Enayetpur</option><option value="Kaladaha">Kaladaha</option><option value="Radhakanai">Radhakanai</option><option value="Asimpatuli">Asimpatuli</option><option value="Vobanipur">Vobanipur</option><option value="Balian">Balian</option>';
	}else if(upZila_list == 'Trishal'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dhanikhola">Dhanikhola</option><option value="Bailor">Bailor</option><option value="Kanthal">Kanthal</option><option value="Kanihari">Kanihari</option><option value="Trishal">Trishal</option><option value="Harirampur">Harirampur</option><option value="Www">Www</option><option value="Balipara">Balipara</option><option value="Mokshapur">Mokshapur</option><option value="Mathbari">Mathbari</option><option value="Amirabari">Amirabari</option><option value="Rampur">Rampur</option>';
	}else if(upZila_list == 'Bhaluka'){
		var union_list = '<option disabled selected>Select Union</option><option value="Uthura">Uthura</option><option value="Meduari">Meduari</option><option value="Varadoba">Varadoba</option><option value="Dhitpur">Dhitpur</option><option value="Dakatia">Dakatia</option><option value="Birunia">Birunia</option><option value="Bhaluka">Bhaluka</option><option value="Mallikbari">Mallikbari</option><option value="Kachina">Kachina</option><option value="Habirbari">Habirbari</option><option value="Rajoi">Rajoi</option>';
	}else if(upZila_list == 'Muktagacha'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dulla">Dulla</option><option value="Borogram">Borogram</option><option value="Tarati">Tarati</option><option value="Kumargata">Kumargata</option><option value="Basati">Basati</option><option value="Mankon">Mankon</option><option value="Ghoga">Ghoga</option><option value="Daogaon">Daogaon</option><option value="Kashimpur">Kashimpur</option><option value="Kheruajani">Kheruajani</option>';
	}else if(upZila_list == 'Mymensingh sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Austadhar">Austadhar</option><option value="Bororchar">Bororchar</option><option value="Dapunia">Dapunia</option><option value="Aqua">Aqua</option><option value="Khagdohor">Khagdohor</option><option value="Charnilaxmia">Charnilaxmia</option><option value="Kushtia">Kushtia</option><option value="Paranganj">Paranganj</option><option value="Sirta">Sirta</option><option value="Charishwardia">Charishwardia</option><option value="Ghagra">Ghagra</option><option value="Vabokhali">Vabokhali</option><option value="Boyra">Boyra</option>';
	}else if(upZila_list == 'Dhobaura'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dakshinmaijpara">Dakshinmaijpara</option><option value="Gamaritola">Gamaritola</option><option value="Dhobaura">Dhobaura</option><option value="Porakandulia">Porakandulia</option><option value="Goatala">Goatala</option><option value="Ghoshgaon">Ghoshgaon</option><option value="Baghber">Baghber</option>';
	}else if(upZila_list == 'Phulpur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rambhadrapur">Rambhadrapur</option><option value="Sondhara">Sondhara</option><option value="Vaitkandi">Vaitkandi</option><option value="Singheshwar">Singheshwar</option><option value="Phulpur">Phulpur</option><option value="Banihala">Banihala</option><option value="Biska">Biska</option><option value="Baola">Baola</option><option value="Payari">Payari</option><option value="Balia">Balia</option><option value="Rahimganj">Rahimganj</option><option value="Balikha">Balikha</option><option value="Kakni">Kakni</option><option value="Dhakua">Dhakua</option><option value="Rupasi">Rupasi</option><option value="Tarakanda">Tarakanda</option><option value="Galagaon">Galagaon</option><option value="Kamargaon">Kamargaon</option><option value="Kamaria">Kamaria</option><option value="Rampurup2">Rampurup2</option>';
	}else if(upZila_list == 'Haluaghat'){
		var union_list = '<option disabled selected>Select Union</option><option value="Bhubankura">Bhubankura</option><option value="Jugli">Jugli</option><option value="Kaichapur">Kaichapur</option><option value="Haluaghat">Haluaghat</option><option value="Gazirbhita">Gazirbhita</option><option value="Bildora">Bildora</option><option value="Sakuai">Sakuai</option><option value="Narail">Narail</option><option value="Dhara">Dhara</option><option value="Dhurail">Dhurail</option><option value="Amtoil">Amtoil</option><option value="Swadeshi">Swadeshi</option>';
	}else if(upZila_list == 'Gouripur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Sahanati">Sahanati</option><option value="Achintapur">Achintapur</option><option value="Mailakanda">Mailakanda</option><option value="Bokainagar">Bokainagar</option><option value="Gouripur">Gouripur</option><option value="Maoha">Maoha</option><option value="Ramgopalpur">Ramgopalpur</option><option value="Douhakhola">Douhakhola</option><option value="Bhangnamari">Bhangnamari</option><option value="Sidhla">Sidhla</option>';
	}else if(upZila_list == 'Gafargaon'){
		var union_list = '<option disabled selected>Select Union</option><option value="Rasulpur">Rasulpur</option><option value="Barobaria">Barobaria</option><option value="Charalgi">Charalgi</option><option value="Saltia">Saltia</option><option value="Raona">Raona</option><option value="Longair">Longair</option><option value="Paithol">Paithol</option><option value="Gafargaon">Gafargaon</option><option value="Josora">Josora</option><option value="Moshakhali">Moshakhali</option><option value="Panchbagh">Panchbagh</option><option value="Usthi">Usthi</option><option value="Dotterbazar">Dotterbazar</option><option value="Niguari">Niguari</option><option value="Tangabo">Tangabo</option>';
	}else if(upZila_list == 'Iswarganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Iswarganj">Iswarganj</option><option value="Sarisha">Sarisha</option><option value="Sohagi">Sohagi</option><option value="Atharabari">Atharabari</option><option value="Rajibpur">Rajibpur</option><option value="Maijbagh">Maijbagh</option><option value="Magtula">Magtula</option><option value="Jatia">Jatia</option><option value="Uchakhila">Uchakhila</option><option value="Tarundia">Tarundia</option><option value="Barahit">Barahit</option>';
	}else if(upZila_list == 'Nandail'){
		var union_list = '<option disabled selected>Select Union</option><option value="Batagoir">Batagoir</option><option value="Nandail">Nandail</option><option value="Chandipasha">Chandipasha</option><option value="Gangail">Gangail</option><option value="Rajgati">Rajgati</option><option value="Muajjempur">Muajjempur</option><option value="Sherpur">Sherpur</option><option value="Singroil">Singroil</option><option value="Achargaon">Achargaon</option><option value="Mushulli">Mushulli</option><option value="Kharua">Kharua</option><option value="Jahangirpur">Jahangirpur</option>';
	}else if(upZila_list == 'Tarakanda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Null">Null</option>';
	}
//
	else if(upZila_list == 'Jamalpur sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kendua">Kendua</option><option value="Sharifpur">Sharifpur</option><option value="Laxirchar">Laxirchar</option><option value="Tolshirchar">Tolshirchar</option><option value="Itail">Itail</option><option value="Narundi">Narundi</option><option value="Ghorada">Ghorada</option><option value="Bashchara">Bashchara</option><option value="Ranagacha">Ranagacha</option><option value="Sheepur">Sheepur</option><option value="Shahbajpur">Shahbajpur</option><option value="Titpalla">Titpalla</option><option value="Mesta">Mesta</option><option value="Digpait">Digpait</option><option value="Rashidpur">Rashidpur</option>';
	}else if(upZila_list == 'Melandah'){
		var union_list = '<option disabled selected>Select Union</option><option value="Durmot">Durmot</option><option value="Kulia">Kulia</option><option value="Mahmudpur">Mahmudpur</option><option value="Nangla">Nangla</option><option value="Nayanagar">Nayanagar</option><option value="Adra">Adra</option><option value="Charbanipakuria">Charbanipakuria</option><option value="Fulkucha">Fulkucha</option><option value="Ghuserpara">Ghuserpara</option><option value="Jhaugara">Jhaugara</option><option value="Shuampur">Shuampur</option>';
	}else if(upZila_list == 'Islampur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Kulkandi">Kulkandi</option><option value="Belghacha">Belghacha</option><option value="Chinaduli">Chinaduli</option><option value="Shapdari">Shapdari</option><option value="Noarpara">Noarpara</option><option value="Islampur">Islampur</option><option value="Partharshi">Partharshi</option><option value="Palabandha">Palabandha</option><option value="Gualerchar">Gualerchar</option><option value="Gaibandha">Gaibandha</option><option value="Charputimari">Charputimari</option><option value="Chargualini">Chargualini</option>';
	}else if(upZila_list == 'Dewangonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Dungdhara">Dungdhara</option><option value="Charamkhawa">Charamkhawa</option><option value="Parramrampur">Parramrampur</option><option value="Hatibanga">Hatibanga</option><option value="Bahadurabad">Bahadurabad</option><option value="Chikajani">Chikajani</option><option value="Chukaibari">Chukaibari</option><option value="Dewangonj">Dewangonj</option>';
	}else if(upZila_list == 'Sarishabari'){
		var union_list = '<option disabled selected>Select Union</option><option value="Satpoa">Satpoa</option><option value="Pogaldigha">Pogaldigha</option><option value="Doail">Doail</option><option value="Aona">Aona</option><option value="Pingna">Pingna</option><option value="Bhatara">Bhatara</option><option value="Kamrabad">Kamrabad</option><option value="Mahadan">Mahadan</option>';
	}else if(upZila_list == 'Madarganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Charpakerdah">Charpakerdah</option><option value="Karaichara">Karaichara</option><option value="Gunaritala">Gunaritala</option><option value="Balijuri">Balijuri</option><option value="Jorekhali">Jorekhali</option><option value="Adarvita">Adarvita</option><option value="Sidhuli">Sidhuli</option>';
	}else if(upZila_list == 'Bokshiganj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Danua">Danua</option><option value="Bagarchar">Bagarchar</option><option value="Battajore">Battajore</option><option value="Shadurpara">Shadurpara</option><option value="Bakshigonj">Bakshigonj</option><option value="Nilakhia">Nilakhia</option><option value="Merurchar">Merurchar</option>';
	}
//
	else if(upZila_list == 'Barhatta'){
		var union_list = '<option disabled selected>Select Union</option><option value="Asma">Asma</option><option value="Chhiram">Chhiram</option><option value="Baushi">Baushi</option><option value="Barhatta">Barhatta</option><option value="Raypur">Raypur</option><option value="Sahata">Sahata</option><option value="Singdha">Singdha</option>';
	}else if(upZila_list == 'Durgapur'){
		var union_list = '<option disabled selected>Select Union</option><option value="Durgapur">Durgapur</option><option value="Kakoirgora">Kakoirgora</option><option value="Kullagora">Kullagora</option><option value="Chandigarh">Chandigarh</option><option value="Birisiri">Birisiri</option><option value="Bakaljora">Bakaljora</option><option value="Gawkandia">Gawkandia</option>';
	}else if(upZila_list == 'Kendua'){
		var union_list = '<option disabled selected>Select Union</option><option value="Asujia">Asujia</option><option value="Dalpa">Dalpa</option><option value="Goraduba">Goraduba</option><option value="Gonda">Gonda</option><option value="Sandikona">Sandikona</option><option value="Maska">Maska</option><option value="Bolaishimul">Bolaishimul</option><option value="Noapara">Noapara</option><option value="Kandiura">Kandiura</option><option value="Chirang">Chirang</option><option value="Roailbariamtala">Roailbariamtala</option><option value="Paikura">Paikura</option><option value="Muzafarpur">Muzafarpur</option>';
	}else if(upZila_list == 'Atpara'){
		var union_list = '<option disabled selected>Select Union</option><option value="Shormushia">Shormushia</option><option value="Shunoi">Shunoi</option><option value="Lunesshor">Lunesshor</option><option value="Baniyajan">Baniyajan</option><option value="Teligati">Teligati</option><option value="Duoj">Duoj</option><option value="Sukhari">Sukhari</option>';
	}else if(upZila_list == 'Madan'){
		var union_list = '<option disabled selected>Select Union</option><option value="Fathepur">Fathepur</option><option value="Nayekpur">Nayekpur</option><option value="Teosree">Teosree</option><option value="Magan">Magan</option><option value="Gobindasree">Gobindasree</option><option value="Madan">Madan</option><option value="Chandgaw">Chandgaw</option><option value="Kytail">Kytail</option>';
	}else if(upZila_list == 'Khaliajuri'){
		var union_list = '<option disabled selected>Select Union</option><option value="Krishnapur">Krishnapur</option><option value="Nogor">Nogor</option><option value="Chakua">Chakua</option><option value="Khaliajuri">Khaliajuri</option><option value="Mendipur">Mendipur</option><option value="Gazipur">Gazipur</option>';
	}else if(upZila_list == 'Kalmakanda'){
		var union_list = '<option disabled selected>Select Union</option><option value="Koilati">Koilati</option><option value="Najirpur">Najirpur</option><option value="Pogla">Pogla</option><option value="Kolmakanda">Kolmakanda</option><option value="Rongchati">Rongchati</option><option value="Lengura">Lengura</option><option value="Borokhapon">Borokhapon</option><option value="Kharnoi">Kharnoi</option>';
	}else if(upZila_list == 'Mohongonj'){
		var union_list = '<option disabled selected>Select Union</option><option value="Borokashiabirampur">Borokashiabirampur</option><option value="Borotolibanihari">Borotolibanihari</option><option value="Tetulia">Tetulia</option><option value="Maghansiadar">Maghansiadar</option><option value="Somajsohildeo">Somajsohildeo</option><option value="Suair">Suair</option><option value="Gaglajur">Gaglajur</option>';
	}else if(upZila_list == 'Purbadhala'){
		var union_list = '<option disabled selected>Select Union</option><option value="Khalishaur">Khalishaur</option><option value="Ghagra">Ghagra</option><option value="Jaria">Jaria</option><option value="Narandia">Narandia</option><option value="Bishkakuni">Bishkakuni</option><option value="Bairaty">Bairaty</option><option value="Hogla">Hogla</option><option value="Gohalakanda">Gohalakanda</option><option value="Dhalamulgaon">Dhalamulgaon</option><option value="Agia">Agia</option><option value="Purbadhala">Purbadhala</option>';
	}else if(upZila_list == 'Netrokona sadar'){
		var union_list = '<option disabled selected>Select Union</option><option value="Chollisha">Chollisha</option><option value="Kailati">Kailati</option><option value="Dokkhinbishiura">Dokkhinbishiura</option><option value="Modonpur">Modonpur</option><option value="Amtola">Amtola</option><option value="Lokkhiganj">Lokkhiganj</option><option value="Singherbangla">Singherbangla</option><option value="Thakurakona">Thakurakona</option><option value="Mougati">Mougati</option><option value="Rouha">Rouha</option><option value="Medni">Medni</option><option value="Kaliaragabragati">Kaliaragabragati</option>';
	}else{
		var union_list = '<option disabled selected>Select Union</option><option value="Null">Null</option>';
	}
	document.getElementById("union_list").innerHTML= union_list;
}
// for village_list section
function unionList(){
	var union_List = document.getElementById('union_list').value;
	if(union_List == 'Sonamokhi'){
		var vallage_list = '<option disabled selected>Select Village</option><option value="Parulkandi">Parulkandi</option><option value="Harinathpur">Harinathpur</option><option value="Krishnagobindapur">Krishnagobindapur</option><option value="Paikpara">Paikpara</option><option value="Paranpur">Paranpur</option><option value="Rasikpur">Rasikpur</option><option value="Rouhabari">Rouhabari</option><option value="Sonamukhi">Sonamukhi</option><option value="Tholbari">Tholbari</option><option value="ShuvGacha">ShuvGacha</option><option value="Charkadaha">Charkadaha</option>';
	}
	else if(union_List == 'Gossainbari'){
		var vallage_list = '<option disabled selected>Select Village</option><option value="Char Natabari">Char Natabari</option><option value="Brabila">Brabila</option><option value="Natabari">Natabari</option><option value="Par Natabari">Par Natabari</option><option value="Chithulia">Chithulia</option><option value="Mabuakhali">Mabuakhali</option><option value="Chuniapara">Chuniapara</option><option value="Gosainbari">Gosainbari</option><option value="East Gosainbari">East Gosainbari</option><option value="West Gosainbari">West Gosainbari</option><option value="Jorkhali">Jorkhali</option><option value="Khokshabari">Khokshabari</option><option value="Manik Patal">Manik Patal</option><option value="Baksapara">Baksapara</option><option value="Manik Potal East">Manik Potal East</option><option value="Manik Potal West">Manik Potal West</option><option value="Boga Manikpotal">Boga Manikpotal</option><option value="East Guadhari">East Guadhari</option><option value="West Guadhari">West Guadhari</option>';
	}else{
		var vallage_list = '<option disabled selected>Select Village</option><option value="Null">Null</option>';
	}
	document.getElementById("village_list").innerHTML= vallage_list;
}
