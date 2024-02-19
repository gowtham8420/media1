import axios from "axios";

const SiteSetting= "http://localhost:8080/api/v2/SiteSetting";
const videoSetting= "http://localhost:8080/api/v2/videoSetting";
const Othersettings="http://localhost:8080/api/v2/Othersettings";
const Contactsettings= "http://localhost:8080/api/v2/Contactsettings";
const Companysiteurl= "http://localhost:8080/api/v2/Companysiteurl";
const Socialsettings="http://localhost:8080/api/v2/Socialsettings"
const Paymentsettings= "http://localhost:8080/api/v2/Paymentsettings";
const Emailsettings= "http://localhost:8080/api/v2/Emailsettings";
const Mobilesettings="http://localhost:8080/api/v2/Mobilesettings";
const seoSettings="http://localhost:8080/api/v2/seoSettings";

class Employee{
    setseoSettings(seosettings){
        return axios.post(seoSettings,seosettings);
    }
    setMobilesettings( mobilesettings){
        return axios.post(Mobilesettings,mobilesettings);
    }
    setEmailsettings(emailsettings){
        return axios.post(Emailsettings,emailsettings);
    }
    setPaymentsettings( paymentsettings){
        return axios.post(Paymentsettings,paymentsettings);
    }
    setSocialsettings(socialsettings){
        return axios.post(Socialsettings,socialsettings);
    }
    setCompanysiteurl( companysiteurl){
        return axios.post(Companysiteurl,companysiteurl);
    }
    setContactsettings(contactsettings){
        return axios.post(Contactsettings,contactsettings);
    }
    setOthersettings( othersettings){
        return axios.post(Othersettings,othersettings);
    }
    setVideoSetting(videosetting){
        return axios.post(videoSetting,videosetting);
    }
    setSiteSetting( sitesetting){
        return axios.post(SiteSetting,sitesetting);
    }

}
export default new Employee()
