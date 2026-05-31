import { useState, useMemo } from "react";
import { Phone, MessageCircle, Search } from "lucide-react";
import logo from "./assets/kfourLogo.jpeg";
const contacts = [
  { name: "Abboud Badih Moussa", phone: "9613768977" },
  { name: "Abboud Semaan Merheb", phone: "9613173789" },
  { name: "Afaf Farah", phone: "9613601305" },
  { name: "Afaf Fayez Kanaan", phone: "966557337446" },
  { name: "Afife Ghantous Jemail", phone: "9613763758" },
  { name: "Albert Anis Andari", phone: "9613212794" },
  { name: "Albert Melhem Tabet", phone: "71413455" },
  { name: "Alexi Tanios Dib", phone: "9613852874" },
  { name: "Alfred Nadim Mekhail", phone: "70763091" },
  { name: "Alice Elias Farah", phone: "71857086" },
  { name: "Alice Jean Pierre Kanaan", phone: "79100330" },
  { name: "Aline Georges Samir Jemail", phone: "76187904" },
  { name: "Aline Mekhail Semaan", phone: "9613917523" },
  { name: "Allam Elias Semaan", phone: "9613241979" },
  { name: "Amal Joseph Hamid Bakhos", phone: "70241516" },
  { name: "Amalia Afif Moussa", phone: "9613784718" },
  { name: "Amer Ibrahim Hanna", phone: "9613252629" },
  { name: "Amine Henri Abi Nader", phone: "70840818" },
  { name: "Amine Nadim Hanna", phone: "71366729" },
  { name: "Amine Samir Jemail", phone: "79186318" },
  { name: "Angie Georges Mekhail", phone: "33669092651" },
  { name: "Anita Rabih Semaan", phone: "9613437746" },
  { name: "Anna Lisa Gaby Nicolas", phone: "71038448" },
  { name: "Antoine Farid Andari", phone: "9613292859" },
  { name: "Antony Dib Boutros", phone: "71234362" },
  { name: "Aref Afif Kanaan", phone: "9613127123" },
  { name: "Assad Kanaan", phone: "9613233142" },
  { name: "Assad Saleh", phone: "76674625" },
  { name: "Atieh Ibrahim Youssef", phone: "9613942319" },
  { name: "Atieh Merheb", phone: "9613398833" },
  { name: "Bachir Hanna Tannous", phone: "71775832" },
  { name: "Bachir Joseph Jemail", phone: "9613534996" },
  { name: "Bahijeh Gerges", phone: "70972752" },
  { name: "Bahijeh Hanna Moussa Dib", phone: "9613463577" },
  { name: "Barbara Hanna Gerges", phone: "961015149268743" },
  { name: "Basem Adib Kanaan", phone: "9613438347" },
  { name: "Basem Chawki Hanna", phone: "9613482702" },
  { name: "Basem Ibrahim Chedid", phone: "9613344296" },
  { name: "Basem Jebran Khoury", phone: "9613698782" },
  { name: "Bassam Assad Saleh", phone: "9613946788" },
  { name: "Bassam Elias Inaty", phone: "9613744066" },
  { name: "Bassam Naïm Gerges", phone: "9613733481" },
  { name: "Boutros Hanna Tannous", phone: "71752304" },
  { name: "Camile Jalil Sabbagh", phone: "70439002" },
  { name: "Carine Khaled Youssef", phone: "81898704" },
  { name: "Carla Afif kanaan", phone: "9613875693" },
  { name: "Carlos Nabil Antoun", phone: "70535361" },
  { name: "Carlos Youssef Khoury", phone: "70147777" },
  { name: "Carole Bakhos Dib", phone: "81878610" },
  { name: "Caroline Claude Bakhos", phone: "9613593042" },
  { name: "Cathrine Imad Saleh", phone: "81209746" },
  { name: "Chadi Gerges", phone: "71624201" },
  { name: "Chadi Jawad Nehme", phone: "9613517669" },
  { name: "Chadi Milad Saleh", phone: "79183079" },
  { name: "Chahid Melhem Tabet", phone: "61432800407" },
  { name: "Chantal Tannous", phone: "71804148" },
  { name: "Charbel Albert Tabet", phone: "70568105" },
  { name: "Charbel Boukhamios Rkaibi", phone: "9613112998" },
  { name: "Charles Ramez Kanaan", phone: "70427682" },
  { name: "Charles Wadih Andari", phone: "961014166141401" },
  { name: "Charlotte Fouad Nouh", phone: "70002589" },
  { name: "Chawki Fares Moussa", phone: "9613242707" },
  { name: "Chebel Melhem Tabet", phone: "961061441169356" },
  { name: "Chedid Hanna Chedid", phone: "9613300752" },
  { name: "Christie Joseph Bakhos", phone: "78815270" },
  { name: "Christine Bachir Joseph Jemail", phone: "9613389217" },
  { name: "Chritina Georges Antoun", phone: "70404074" },
  { name: "Cladia Hanna Merheb", phone: "76393016" },
  { name: "Claire Andari Khoury", phone: "71662712" },
  { name: "Claire Hani Naim Gerges", phone: "76703370" },
  { name: "Clara Merhej", phone: "71022760" },
  { name: "Claude Semaan Daher", phone: "9613665402" },
  { name: "Claudette Youssef", phone: "70599392" },
  { name: "Colonel Jean Farid Andari", phone: "9613353139" },
  { name: "Colonel Salim Antoun Kanaan", phone: "9613604021" },
  { name: "Cristelle Youssef Lahoud", phone: "9613579402" },
  { name: "Dane Housam Gerges", phone: "961033626076389" },
  { name: "Dani Abdo Mekhail", phone: "9613323565" },
  { name: "Dani Nehme", phone: "9613266031" },
  { name: "Dani Nicolas", phone: "9613340146" },
  { name: "Darine Antoun", phone: "9613527504" },
  { name: "David Maurice Saleh", phone: "70492960" },
  { name: "Diala Hanna Al Makdessi", phone: "76448925" },
  { name: "Diana Elias Youssef", phone: "9613434847" },
  { name: "Diana Harb Elias", phone: "79158262" },
  { name: "Diana Saleh", phone: "81348420" },
  { name: "Dib Tansa", phone: "76577561" },
  { name: "Dimitry Imad Saleh", phone: "961033664175622" },
  { name: "Dina Ghassan Ayache", phone: "9613201038" },
  { name: "Diya Hanna Saleh", phone: "71467221" },
  { name: "Diya Mikhail Assad Saleh", phone: "9613101548" },
  { name: "Dolly Amine Samir Jemail", phone: "78865062" },
  { name: "Dr. Doris Imad Saleh", phone: "78889387" },
  { name: "Dr. Gaby Nabil Dib", phone: "9613613517" },
  { name: "Dr. Hanna Wadih Gerges", phone: "9613636123" },
  { name: "Dr. Housam Naïm Gerges", phone: "70718102" },
  { name: "Dr. Jean Elias Inaty", phone: "9613354345" },
  { name: "Dr. Joe Ramez Kanaan", phone: "9613633113" },
  { name: "Dr. Khaled Fayez Kanaan", phone: "9613360807" },
  { name: "Dr. Khaled Youssef", phone: "70641825" },
  { name: "Dr. Nina Nabil Dib", phone: "961015147967676" },
  { name: "Dr. Rachid Ibrahim Youssef", phone: "9613194558" },
  { name: "Dr. Rida Ghantous Jemail", phone: "70126012" },
  { name: "Dr. Vlademir Joseph Youssef", phone: "9613513606" },
  { name: "Dr. Wadad Semaan Khoury", phone: "9613340039" },
  { name: "Dr. Wadih Mekhail Ayoub", phone: "81750510" },
  { name: "Elena Elias Gerges Merheb", phone: "76812196" },
  { name: "Elena Nadim Mekhail", phone: "71875243" },
  { name: "Eliane Bakhos Nehmatallah", phone: "9613327302" },
  { name: "Eliane Chahid Koussaifi", phone: "70427004" },
  { name: "Eliane Dib Mekhail", phone: "81381561" },
  { name: "Eliane Ghantous Jemail", phone: "9613402391" },
  { name: "Elias Emile Elias", phone: "9613289424" },
  { name: "Elias Gerges Merheb", phone: "961097450156760" },
  { name: "Elias Hanna Semaan", phone: "961016173208693" },
  { name: "Elias Melhem Tabet", phone: "76328750" },
  { name: "Elie Antonios Dib", phone: "9613425805" },
  { name: "Elie Dib", phone: "9613989411" },
  { name: "Elie Fouad Andari", phone: "9613566427" },
  { name: "Elie Gaby Dib", phone: "76761114" },
  { name: "Elie Ghantous Jemail", phone: "9613140743" },
  { name: "Elie Hanna Gerges", phone: "15147965511" },
  { name: "Elie Jebran Merheb", phone: "71743399" },
  { name: "Elie Marcel Bakhos", phone: "71706123" },
  { name: "Elie Nabil Dib", phone: "97455137924" },
  { name: "Elie Nadim Inaty", phone: "9613321136" },
  { name: "Elie Pierre Jemail", phone: "9613929256" },
  { name: "Elie Rabih Semaan", phone: "70793476" },
  { name: "Elie Samir Kanaan", phone: "9613474395" },
  { name: "Elise Robert Andari", phone: "70414305" },
  { name: "Elsy Ghantous Jemail", phone: "9613178348" },
  { name: "Emile Marcel Bakhos", phone: "70706123" },
  { name: "Emile Maurice Andari", phone: "9613207106" },
  { name: "Emile Najib Kanaan", phone: "9613248998" },
  { name: "Emile Nehmatallah Andari", phone: "4915782288806" },
  { name: "Emile Nicolas Elias", phone: "76754623" },
  { name: "Emilio Massoud Najem", phone: "573206432775" },
  { name: "Eskandar Jalil Sabbagh", phone: "9613637110" },
  { name: "Eugeni Maurice Mekhail Antoun", phone: "9613965352" },
  { name: "Fadi Adib Kanaan", phone: "9613695740" },
  { name: "Fadi Pierre Jemail", phone: "33618483219" },
  { name: "Fadi Zoughbi", phone: "9613718515" },
  { name: "Farah Nasr Farah", phone: "71360567" },
  { name: "Faraj Nicolas Elias", phone: "9613528486" },
  { name: "Farid Hanna Andari", phone: "9613975986" },
  { name: "Farid Hanna Gerges", phone: "15145755510" },
  { name: "Farideh Ayoub Kanaan", phone: "71064088" },
  { name: "Fayez Imad Youssef", phone: "70756048" },
  { name: "Ferial Jihad Badih Moussa", phone: "71755067" },
  { name: "Firas Ghassan Saleh", phone: "71024492" },
  { name: "Fouad Georges Antoun", phone: "81348177" },
  { name: "Fouad Mikhail Antoun", phone: "76332175" },
  { name: "Francois Hanna Lahoud", phone: "9613950706" },
  { name: "Gabriel Semaan Merheb", phone: "70569344" },
  { name: "Gaby Adib Kanaan", phone: "76003244" },
  { name: "Gaby Andari", phone: "9613409547" },
  { name: "Gaby Bahij Hanna", phone: "9613419265" },
  { name: "Gaby Elias Kanaan", phone: "9613580349" },
  { name: "Gaby Elie Dib", phone: "70505977" },
  { name: "Gaby Fouad Nouh", phone: "9613647692" },
  { name: "Gaby Semaan Nicolas", phone: "9613482965" },
  { name: "Gebran Hanna Chedid", phone: "70354981" },
  { name: "Gebran Nicolas Elias", phone: "9613134726" },
  { name: "Georges Abdo Mekhail", phone: "70353081" },
  { name: "Georges Albert Tabet", phone: "9613125923" },
  { name: "Georges Andari - Caporal", phone: "9613587606" },
  { name: "Georges Anis Andari", phone: "9613866470" },
  { name: "Georges Elias Tabet", phone: "71513471" },
  { name: "Georges Farid Saleh", phone: "9613477379" },
  { name: "Georges Gebrail Andari", phone: "70188354" },
  { name: "Georges Gebrail Andari - Wife", phone: "70188362" },
  { name: "Georges Ghassan Wehbeh", phone: "76438452" },
  { name: "Georges Ghnatios Jemail", phone: "9613566568" },
  { name: "Georges Hamid Bakhos", phone: "76577388" },
  { name: "Georges Harb Elias", phone: "78944171" },
  { name: "Georges Jebran Chedid", phone: "70403100" },
  { name: "Georges Karim Inaty", phone: "9613419326" },
  { name: "Georges Majid Dib", phone: "70335605" },
  { name: "Georges Melhem Tabet", phone: "81191029" },
  { name: "Georges Michel Nicolas", phone: "70734275" },
  { name: "Georges Najib Kanaan", phone: "71362326" },
  { name: "Georges Nayef Bechara", phone: "9613303513" },
  { name: "Georges Nehme Antoun", phone: "9613348177" },
  { name: "Georges Nematallah Andari", phone: "9613222942" },
  { name: "Georges Nicolas Nasim Dib", phone: "70951125" },
  { name: "Georges Philipe Khoury", phone: "70543223" },
  { name: "Georges Rachid Andari", phone: "61414383818" },
  { name: "Georges Raïf Elias", phone: "9613156399" },
  { name: "Georges Samir Jemail", phone: "9613125570" },
  { name: "Georges Tabet", phone: "61402599622" },
  { name: "Georges Tabet", phone: "71865822" },
  { name: "Georges Tabet", phone: "79183650" },
  { name: "Georges Yaccoub Chedid", phone: "9613468755" },
  { name: "Georges Zeaiter Andari", phone: "61414912845" },
  { name: "Georgette Pierre Boutros", phone: "9613113104" },
  { name: "Georgina Eskandar Youssef", phone: "9613157359" },
  { name: "Georgina Joseph Ghantous Jemail", phone: "71054845" },
  { name: "Gerges Boulos Youssef", phone: "9613189600" },
  { name: "Gergi Salim Nicolas", phone: "9613254522" },
  { name: "Ghassan Hanna Daoud", phone: "9613837396" },
  { name: "Ghassan Mounir Moussa", phone: "9613740848" },
  { name: "Ghassan Salim Saleh", phone: "70455820" },
  { name: "Ghinwa Salloum", phone: "76131681" },
  { name: "Gisele Gebran Elias", phone: "70446799" },
  { name: "Gisele Kanaan", phone: "9613585347" },
  { name: "Gladys Ghassan Gergi Wehbe", phone: "9613537393" },
  { name: "Hadi Michel Antoun", phone: "76184795" },
  { name: "Haifa Salah Farah", phone: "9613469053" },
  { name: "Hamid Sarkis Nassar", phone: "9613102628" },
  { name: "Hanaa Michel Nicolas", phone: "9613945486" },
  { name: "Hanadi Michel Fouad Antoun", phone: "9613926034" },
  { name: "Hani Naïm Gerges", phone: "76441747" },
  { name: "Hanin Raïf Elias", phone: "70158929" },
  { name: "Hanna Adel Kanaan", phone: "70124643" },
  { name: "Hanna Elias Choucair", phone: "9613535147" },
  { name: "Hanna Georges Merheb", phone: "9613524871" },
  { name: "Hanna Gergi Hanna", phone: "905353651415" },
  { name: "Hanna Mekhail Saleh", phone: "9613363103" },
  { name: "Hanna Salim Saleh", phone: "70106419" },
  { name: "Hanna Semaan Abboud", phone: "76504097" },
  { name: "Hanna Wadih Ayoub", phone: "70417758" },
  { name: "Hasna Merheb Saleh", phone: "70580382" },
  { name: "Hassib Salim Nicolas", phone: "9613349990" },
  { name: "Henri Gebran Khoury", phone: "17154105669" },
  { name: "Henry Abi Nader", phone: "9613920825" },
  { name: "Hiam Fayez Youssef", phone: "70667532" },
  { name: "Hiam Merheb", phone: "9613259654" },
  { name: "Hiba Atieh Hanna Merheb", phone: "9613570559" },
  { name: "Hiba Bevharra Wadih Zoughbi", phone: "79126607" },
  { name: "Hiba Daher Tannous", phone: "9613693728" },
  { name: "Hosn Raïf Elias", phone: "81333123" },
  { name: "Houda Elias Semaan", phone: "71615823" },
  { name: "Houda Mekhail Wadih Ayoub", phone: "9613342808" },
  { name: "Houwaida  Adnan Gerges Saleh", phone: "9613362079" },
  { name: "Houwaida Robert Wadih Andari", phone: "71901079" },
  { name: "Ibrahim Inaty", phone: "9613764821" },
  { name: "Imad Fayez Youssef", phone: "9613462909" },
  { name: "Imad Hanna Saleh", phone: "9613752814" },
  { name: "Imad Nasr Farah", phone: "966530859053" },
  { name: "Isabelle Imad Fayez Youssef", phone: "9613067517" },
  { name: "Issam Semaan Saleh", phone: "9613636200" },
  { name: "Ivone Badih Ghnatios Jemail", phone: "71861916" },
  { name: "Jack Khoury", phone: "9613973988" },
  { name: "Jack Salim Saleh", phone: "70126294" },
  { name: "Jad Gerges", phone: "76122508" },
  { name: "James Jean Pierre Kanaan", phone: "79100220" },
  { name: "Jamileh Hanna. Saleh", phone: "70186197" },
  { name: "Jamileh Saleh", phone: "70410826" },
  { name: "Jamileh Saleh Samir Moussa", phone: "79164907" },
  { name: "Jania Elie Samir Kannan", phone: "9613398765" },
  { name: "Jano Carlos Antoun", phone: "70550147" },
  { name: "Jawad Mekhail Nehme", phone: "9613618114" },
  { name: "Jean Ayoub Kannan", phone: "9613634393" },
  { name: "Jean Claude Bakhos", phone: "71065628" },
  { name: "Jean Elie Andari", phone: "76165997" },
  { name: "Jean Ghnatios Jemail", phone: "9613541436" },
  { name: "Jean Melhem Tabet", phone: "61452420299" },
  { name: "Jean Pierre Kanaan", phone: "9613258833" },
  { name: "Jeannette Hanna Gerges", phone: "76885476" },
  { name: "Jesica Gebran Elias", phone: "70317137" },
  { name: "Jesica Gebran Elias", phone: "70403550" },
  { name: "Jessica Georges Saleh", phone: "71711581" },
  { name: "Jihad Badih Moussa", phone: "9613161629" },
  { name: "Jihad Elias Farah", phone: "9613567309" },
  { name: "Jihad Fayez Youssef", phone: "9613795100" },
  { name: "Jihad Nasr Farah", phone: "9613248535" },
  { name: "Joanna Farah Tannous", phone: "70348197" },
  { name: "Joanne Hanna Tannous", phone: "9613067520" },
  { name: "Joe Georges Mikhael", phone: "78946980" },
  { name: "Johaina Nicolas Elias", phone: "9613227100" },
  { name: "John Tabet", phone: "71140435" },
  { name: "Johnny Nicolas Daoud", phone: "76513061" },
  { name: "Josaphine Zoughbi", phone: "71759228" },
  { name: "Jose Carlos Khoury", phone: "9613484234" },
  { name: "Joseline Allam Semaan", phone: "9613148930" },
  { name: "Joseph Andari", phone: "9613854721" },
  { name: "Joseph Hamid Bakhos", phone: "9613241516" },
  { name: "Joseph Harb Elias", phone: "9613773089" },
  { name: "Joseph Maurice Andari", phone: "9613103610" },
  { name: "Joseph Sarkis Nassar", phone: "70518561" },
  { name: "Joseph Toni Andari", phone: "76401592" },
  { name: "Joseph Wadih Andari", phone: "9613377510" },
  { name: "Josianne Emile Elias", phone: "9613869242" },
  { name: "Josline Georges Hamid Bakhos", phone: "70225668" },
  { name: "Jouanna Semaan - Bonita", phone: "70184944" },
  { name: "Joumana Wadih Saleh", phone: "9613338101" },
  { name: "Joyce Fadi Zoughbi", phone: "79305505" },
  { name: "Judi Joseph Youssef", phone: "76313772" },
  { name: "Julie Simon Salloum Nicolas", phone: "9613538993" },
  { name: "Juliette Allam Semaan", phone: "9613388513" },
  { name: "Kamal Michel Nicolas", phone: "9613876865" },
  { name: "Katia Andari", phone: "9613710061" },
  { name: "Katia Zafer Dib", phone: "71658040" },
  { name: "Kely Elias Merheb", phone: "9613985924" },
  { name: "Kenaan Najib Kenaan", phone: "70459026" },
  { name: "Laila Saleh", phone: "71812627" },
  { name: "Lama Kanaan", phone: "15142097769" },
  { name: "Lara Jack Salim Saleh", phone: "9613449398" },
  { name: "Lara Maurice Saleh", phone: "76447218" },
  { name: "Latife Khoury Elias Inaty", phone: "9613496267" },
  { name: "Laudi Elias Hanna Wehbe", phone: "9613258690" },
  { name: "Laura Albert Andari", phone: "9613183724" },
  { name: "Laure Elias Abdo Mekhail", phone: "9613572474" },
  { name: "Laurice Halim Kanaan", phone: "9613104524" },
  { name: "Layla Antonios Boutros", phone: "971562225859" },
  { name: "Layla Semaan Khoury", phone: "9613396131" },
  { name: "Lea Rabih Semaan", phone: "70201916" },
  { name: "Lebnan Hanna Youssef", phone: "9613538054" },
  { name: "Leda Georges Harb Elias", phone: "76084266" },
  { name: "Liliane Jihad Fayez Youssef", phone: "9613019854" },
  { name: "Liliane Naïm Antonios", phone: "9613179846" },
  { name: "Liliane Salem Daoud Dib", phone: "76821975" },
  { name: "Lina Mekhail Semaan", phone: "9613465783" },
  { name: "Lola Dib", phone: "76644417" },
  { name: "Loulou Kamal Michel Nicolas", phone: "81334652" },
  { name: "Luciana Hadi Inaty", phone: "9613661471" },
  { name: "Lucie Nicolas", phone: "76409019" },
  { name: "Lucien Naïm Antonios", phone: "70806378" },
  { name: "Luna Emile Marcel Bakhos", phone: "9613677970" },
  { name: "Madelene Dib", phone: "70539531" },
  { name: "Maguy Chedid", phone: "70947370" },
  { name: "Majid Dib", phone: "9613458469" },
  { name: "Manal Hanna Bechara", phone: "70332340" },
  { name: "Manuel Jawad Nehme", phone: "9613103111" },
  { name: "Marc Roni Nicolas", phone: "71997055" },
  { name: "Marcel Afif Kanaan", phone: "71709628" },
  { name: "Marcel Emile Bakhos", phone: "9613348420" },
  { name: "Margo Michel Abdo Mekhail", phone: "9613488386" },
  { name: "Maria Georges Albert Tabet", phone: "71922109" },
  { name: "Mariam Nicolas Elias", phone: "70118670" },
  { name: "Marie Bell Samir Moussa", phone: "9613137132" },
  { name: "Marie Ghassan Ayach", phone: "9613431300" },
  { name: "Marie Jean Gebrail Andari", phone: "9613700032" },
  { name: "Mariette Eskandar Youssef", phone: "71631789" },
  { name: "Marina Joseph Bakhos", phone: "9613715924" },
  { name: "Mario Georges Jemail", phone: "70142194" },
  { name: "Marly Roni Nicolas", phone: "76588055" },
  { name: "Maroun Andari", phone: "9613588958" },
  { name: "Marwan Tamim Saleh", phone: "70946615" },
  { name: "Maurice Andari", phone: "9613207103" },
  { name: "Maurice Anis Andari", phone: "14082211125" },
  { name: "Maurice Carlos Antoun", phone: "76421742" },
  { name: "Maurice Merheb", phone: "22650999900" },
  { name: "Maurice Salim Saleh", phone: "70754004" },
  { name: "Maurice Semaan Merheb", phone: "81337296" },
  { name: "Maxim Youssef", phone: "76767042" },
  { name: "Maya - Roger Husband", phone: "76596655" },
  { name: "Maya Ibrahim Antonios", phone: "71281879" },
  { name: "Micha Charles Wadih Andari", phone: "4169861401" },
  { name: "Michel Abdo Mekhail", phone: "9613180918" },
  { name: "Michel Antonios Dib", phone: "70368362" },
  { name: "Milad Dib", phone: "9613440910" },
  { name: "Mimi Nehmatallah Andari", phone: "61414297877" },
  { name: "Mireille Jemail Elias", phone: "61424432489" },
  { name: "Mirna David Maurice Saleh", phone: "71310576" },
  { name: "Mirna Georges Jemail", phone: "71498517" },
  { name: "Mirna Hani Nicolad Eliad", phone: "70267148" },
  { name: "Mirna Nicolas", phone: "70906223" },
  { name: "Mirvat Georges Jemail", phone: "9613473193" },
  { name: "Mokbel Pierre Antonios Boutros", phone: "71040688" },
  { name: "Mouin Farid Saleh", phone: "9613459305" },
  { name: "Municipality Kfour Al Arbi", phone: "76775501" },
  { name: "Nabiha Gebran Nicolas Elas", phone: "70460440" },
  { name: "Nabil Carlos Antoun", phone: "76079827" },
  { name: "Nabil Fares Moussa", phone: "9613353646" },
  { name: "Nabil Fayez Kanaan", phone: "9613095257" },
  { name: "Nabil Najib Kanaan", phone: "70472944" },
  { name: "Nada Adnan Saleh", phone: "70155924" },
  { name: "Nada Afif Kanaan", phone: "9613214632" },
  { name: "Nada Dib", phone: "9613192365" },
  { name: "Nada Nicolas Elias Hanna", phone: "9613465079" },
  { name: "Nadia Joseph Tanios Bakhos", phone: "76766569" },
  { name: "Nadia Michel Antoun", phone: "71668409" },
  { name: "Nadia Nehmatallah Andari", phone: "9613309708" },
  { name: "Nadia Roni Semaan Nicolas", phone: "70588055" },
  { name: "Nadim Nicolas Mekhail", phone: "96599748405" },
  { name: "Nadimi Moussa", phone: "9613677343" },
  { name: "Nadine Bakhos", phone: "70953701" },
  { name: "Naimeh Hanna Hanna", phone: "9613893068" },
  { name: "Naji Nicolas Elias", phone: "9613889083" },
  { name: "Najib Mekhail Saleh", phone: "9613881827" },
  { name: "Najib Yaccoub Chedid", phone: "71127381" },
  { name: "Najibeh Yaccoub Chedid", phone: "71728643" },
  { name: "Nameer Fouad Antoun", phone: "9613562337" },
  { name: "Nancy Alexi Dib", phone: "71268315" },
  { name: "Nasr Elias Farah", phone: "9613598278" },
  { name: "Nassim Farid Saleh", phone: "9613538233" },
  { name: "Nathalie Hanna", phone: "70436277" },
  { name: "Nawal Adnan Saleh Farah", phone: "78852211" },
  { name: "Nayla Ghassan Ayach", phone: "9613212644" },
  { name: "Naïm Antonios", phone: "9613357738" },
  { name: "Nehme Mekhail Nehme", phone: "79100943" },
  { name: "Nicolas Elias Hanna", phone: "9613164551" },
  { name: "Nicolas Elias Hanna", phone: "71859428" },
  { name: "Nicolas Farah", phone: "70240224" },
  { name: "Nicolas Nadim Inaty", phone: "61415643415" },
  { name: "Nicolas Sabbagh", phone: "70547559" },
  { name: "Nicolas Semaan Merheb", phone: "9613188443" },
  { name: "Nidaa Afif Kanaan", phone: "71293982" },
  { name: "Nidal Mouin Bakhos Kadi", phone: "9613325674" },
  { name: "Ninette Marcel Emile Bakhos", phone: "76706123" },
  { name: "Nisrine Mouin Bakhos", phone: "971507248477" },
  { name: "Noha - Kfour", phone: "76109971" },
  { name: "Noha Nadime Hanna Nasr", phone: "61417019289" },
  { name: "Norhane Elie Gebran Elias", phone: "71895152" },
  { name: "Norma Khaled Kanaan", phone: "9613458045" },
  { name: "Noura Abou Saleh", phone: "70457735" },
  { name: "Noêl Carlos Youssef Khoury", phone: "70157777" },
  { name: "Odette Joseph Gebrail Andari", phone: "9613377546" },
  { name: "Oussama Issam Saba", phone: "9613444656" },
  { name: "Pascale Issam Saleh", phone: "9613278326" },
  { name: "Pascale Nameer Antoun", phone: "9613913218" },
  { name: "Patrick Samir Kanaan", phone: "71367114" },
  { name: "Pierre Ghnatios Jemail", phone: "76399216" },
  { name: "Pierre Sarkis Nassar", phone: "9613518561" },
  { name: "Pierre Semaan Youssef", phone: "9613750080" },
  { name: "Pierre Wadih Andari", phone: "9613213878" },
  { name: "Rabih Jean Jemail", phone: "70750087" },
  { name: "Rabih Mekhail Semaan", phone: "9613561026" },
  { name: "Rabih Tannous", phone: "70479053" },
  { name: "Racha Ibrahim Antonios", phone: "70869180" },
  { name: "Rachel Maurice Saleh", phone: "71679613" },
  { name: "Rachelle Maurice Saleh", phone: "33660920923" },
  { name: "Rafka Akl Joseph Tannous", phone: "9613885661" },
  { name: "Rafka Jean Andari", phone: "9613780234" },
  { name: "Rafka Moïn Farid Gerges", phone: "70241054" },
  { name: "Rafka Yaccoub Chedid", phone: "76751631" },
  { name: "Rajaa Badih Moussa", phone: "9613155915" },
  { name: "Ralph Jihad Youssef", phone: "76711484" },
  { name: "Rami Jean Jemail", phone: "70219248" },
  { name: "Rami Michel Antoun", phone: "71790824" },
  { name: "Rami Salah Farah", phone: "70156694" },
  { name: "Rana Maurice Saleh", phone: "78853431" },
  { name: "Rana Youssef", phone: "9613343212" },
  { name: "Randa Georges Ibrahim Gerges", phone: "71884978" },
  { name: "Rania Toni Georges Bakhos", phone: "9613679016" },
  { name: "Reine Youssef Lahoud", phone: "70466283" },
  { name: "Rev. Aftim", phone: "9613812559" },
  { name: "Rev. Georges Safita", phone: "9613721013" },
  { name: "Rev. Ghassan Hanna", phone: "70416851" },
  { name: "Rev. Ghnatios Dagher", phone: "9613348680" },
  { name: "Richard Chedid", phone: "79309606" },
  { name: "Richard Toni Andari", phone: "76113485" },
  { name: "Rima Wadih Gerges", phone: "9613745906" },
  { name: "Rita Fadi Anyonios Inaty", phone: "71235810" },
  { name: "Rita Farah", phone: "9613099286" },
  { name: "Rita Jean Moussa", phone: "71111354" },
  { name: "Rita Joseph Jemail", phone: "71665338" },
  { name: "Rita Miled Hanna Saleh", phone: "9613339802" },
  { name: "Rita Robert Andari", phone: "76590553" },
  { name: "Rita Walid Saleh", phone: "76551121" },
  { name: "Rita Youssef Abi Nader", phone: "78860296" },
  { name: "Rita Ziad Youssef", phone: "76415237" },
  { name: "Robert Wadih Andari", phone: "9613901079" },
  { name: "Romeo Edmond Nehmatallah", phone: "70766762" },
  { name: "Roni Atieh Merheb", phone: "76891342" },
  { name: "Roni Mekhail Ayoub", phone: "61425338404" },
  { name: "Roni Semaan Nicolas", phone: "9613588055" },
  { name: "Roro Hanna", phone: "9613071824" },
  { name: "Rose Ghenatios Andari", phone: "70723130" },
  { name: "Rose Semaan Khoury", phone: "9613569103" },
  { name: "Rouba Ibrahim Chedid", phone: "9613455095" },
  { name: "Rouba Youssef", phone: "71343673" },
  { name: "Roudi Hanna", phone: "71708562" },
  { name: "Roula Gebran Chedid", phone: "9613745985" },
  { name: "Roula Joseph Jemail", phone: "70950651" },
  { name: "Roula Pierre Jemail", phone: "70937720" },
  { name: "Saba Saba", phone: "70233911" },
  { name: "Sabah Antonios Boutros", phone: "9613697760" },
  { name: "Sabah Elias Ando Mekhail", phone: "70890116" },
  { name: "Salah Elias Farah", phone: "9613305881" },
  { name: "Salah Michel Nicolas", phone: "70176624" },
  { name: "Salam Afif Moussa", phone: "9613854076" },
  { name: "Salam Boutros", phone: "76592602" },
  { name: "Salam Mikhail", phone: "71806843" },
  { name: "Salem Chafic Dib", phone: "9613621257" },
  { name: "Salem Farouk Tannous", phone: "9613650318" },
  { name: "Salim Asaad Saleh", phone: "9613702619" },
  { name: "Salloum Salim Nicolas", phone: "96599325425" },
  { name: "Salloum Salim Nicolas", phone: "71655199" },
  { name: "Sally Ghassan Gerges", phone: "70781990" },
  { name: "Sally Kanaan Najib Kanaan", phone: "70918897" },
  { name: "Samer Elias Merheb", phone: "9613494189" },
  { name: "Samer Nicolas", phone: "71221321" },
  { name: "Samer Ramez Kanaan", phone: "9613454537" },
  { name: "Samer Semaan Gerges", phone: "15145490404" },
  { name: "Sami Chedid", phone: "9613437846" },
  { name: "Sami Yaccoub Chedid", phone: "9613437346" },
  { name: "Samir Chafic Dib", phone: "9613969085" },
  { name: "Samir Elias Kanaan", phone: "9613263493" },
  { name: "Samir Fayez Kanaan", phone: "70289972" },
  { name: "Samir Ghnatios Jemail", phone: "9613822661" },
  { name: "Samir Nadim Inaty", phone: "9613706855" },
  { name: "Samir Semaan Saleh", phone: "9613819924" },
  { name: "Samir Youssef Khoury", phone: "9613904677" },
  { name: "Samira Abboud", phone: "71622706" },
  { name: "Samira Afif Moussa", phone: "71563873" },
  { name: "Samira Gaby Nabil Dib", phone: "9613420709" },
  { name: "Samira Hanna Farah", phone: "9613397330" },
  { name: "Samira Nadim Inaty", phone: "9613231445" },
  { name: "Sandra Gerges", phone: "70406074" },
  { name: "Sayed Najib Kanaan", phone: "9613205622" },
  { name: "Semaan Hanna", phone: "76354845" },
  { name: "Semaan Merheb", phone: "70290914" },
  { name: "Semaan Tamim Saleh", phone: "70507207" },
  { name: "Semaan Wadih Gerges", phone: "9613716461" },
  { name: "Shady Hanna", phone: "9613486765" },
  { name: "Siham Elias Gerges", phone: "70546530" },
  { name: "Siham Moussa", phone: "9613679099" },
  { name: "Silvana Wissam Andari", phone: "9613248002" },
  { name: "Simon Salloum Nicolas", phone: "9613935993" },
  { name: "Sis. Rose Elias Nehme", phone: "76173594" },
  { name: "Souad Maurice Salim Saleh", phone: "76867498" },
  { name: "Souha Gergi Wehbe", phone: "9613509943" },
  { name: "Souha Hanna Merheb", phone: "70554476" },
  { name: "Souhail Naïm Gerges", phone: "70506474" },
  { name: "Stephani Ghantous Jemail", phone: "76991055" },
  { name: "Suzanne Boutros", phone: "76587234" },
  { name: "Suzanne Saba", phone: "78932447" },
  { name: "Tani Tabet", phone: "61433198266" },
  { name: "Tania Emile Elias", phone: "70919723" },
  { name: "Tanios Bakhos", phone: "9613839857" },
  { name: "Tanios Semaan Inaty", phone: "70349589" },
  { name: "Therese Dib", phone: "70042589" },
  { name: "Thouraya Mikhail Antoun", phone: "9613264598" },
  { name: "Thouraya Youssef", phone: "70140037" },
  { name: "Tierry Carlos Khoury", phone: "9613590806" },
  { name: "Tina", phone: "71956091" },
  { name: "Toni Antoun", phone: "9613108621" },
  { name: "Toni Badih Jemail", phone: "9613413067" },
  { name: "Toni Elias Tabet", phone: "70580364" },
  { name: "Toni Emile Elias", phone: "70330997" },
  { name: "Toni Georges Bakhos", phone: "9613533090" },
  { name: "Toni Hanna", phone: "70567009" },
  { name: "Toni Hanna Tannous", phone: "70080031" },
  { name: "Toni Youssef Boutros", phone: "70607673" },
  { name: "Toni Youssef Maroun Andari", phone: "79163734" },
  { name: "Toni Zoughbi", phone: "9613351319" },
  { name: "Toufic Imad Youssef", phone: "71478680" },
  { name: "Tracy Claude Bakhos", phone: "78987474" },
  { name: "Vanessa Nicolas Daoud", phone: "76709975" },
  { name: "Violette Nabil Antoun", phone: "76394952" },
  { name: "Wadad Toni Sammour Dib", phone: "70359772" },
  { name: "Wadih Gerges Saleh", phone: "9613952108" },
  { name: "Wael Hanna", phone: "71050609" },
  { name: "Wahid Semaan Merheb", phone: "9613081324" },
  { name: "Walid Hanna Saleh", phone: "9613198773" },
  { name: "Wassim Najib Kanaan", phone: "70401118" },
  { name: "Wassim Semaan", phone: "9613912722" },
  { name: "Wissam Badih Moussa", phone: "9613894806" },
  { name: "Wissam Wadih Al Orom", phone: "9613459096" },
  { name: "Yaccoub Elias Choucair", phone: "70255149" },
  { name: "Yara Robert Andari", phone: "9613200384" },
  { name: "Yasmine Georges Mekhail", phone: "9613454010" },
  { name: "Yolla Fouad Antoun", phone: "9613913742" },
  { name: "Yorgo Georges Antoun", phone: "76348177" },
  { name: "Youssef Elias Choucair", phone: "9613374079" },
  { name: "Youssef Lahoud", phone: "9613523440" },
  { name: "Youssef Mrad Khoury", phone: "9613134324" },
  { name: "Youssef Tansa", phone: "9613621091" },
  { name: "Zeina Georges Anoun", phone: "9613736017" },
  { name: "Ziad Fayez Youssef", phone: "9613677205" },
  { name: "Ziad Wadih Gerges", phone: "15142086843" },
  { name: "Ziad Yaccoub chedid", phone: "76925482" }
];

export default function KfourDirectory() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.phone.includes(q)
    );
  }, [query]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };

  const avatarColors = [
    "from-blue-400 to-blue-600",
    "from-emerald-400 to-emerald-600",
    "from-violet-400 to-violet-600",
    "from-rose-400 to-rose-600",
    "from-amber-400 to-amber-600",
    "from-cyan-400 to-cyan-600",
    "from-fuchsia-400 to-fuchsia-600",
    "from-teal-400 to-teal-600",
  ];

  const getColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return avatarColors[Math.abs(hash) % avatarColors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
       {/* /* <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
          <Users size={20} className="text-white" />
        </div> */ }
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border border-amber-200 bg-black flex items-center justify-center">
  <img
    src={logo}
    alt="Kfour Directory Logo"
    className="w-full h-full object-cover"
  />
</div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight tracking-tight">
                Kfour Al Arbi
              </h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                Village Directory
              </p>
            </div>
            <div className="ml-auto bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
              {contacts.length} contacts
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or phone…"
              className="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-2xl text-sm text-slate-700 placeholder-slate-400 border border-transparent focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-4 pb-10">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center">
              <Search size={28} className="text-slate-300" />
            </div>
            <p className="text-slate-500 font-medium text-base">No contact found</p>
            <p className="text-slate-400 text-sm">Try a different name or number</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filtered.map((contact, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center gap-3 hover:shadow-md hover:border-slate-200 transition-all duration-200 active:scale-[0.99]"
                style={{ animationDelay: `${Math.min(i * 20, 200)}ms` }}
              >
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getColor(contact.name)} flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <span className="text-white font-bold text-sm">
                    {getInitials(contact.name)}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm leading-snug truncate">
                    {contact.name}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5 font-mono tracking-wide">
                    +{contact.phone}
                  </p>
                </div>

                <div className="flex gap-1.5 flex-shrink-0">
                  <a
                    href={`tel:+${contact.phone}`}
                    className="w-9 h-9 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 flex items-center justify-center shadow-sm shadow-blue-200 transition-colors duration-150"
                    title="Call"
                  >
                    <Phone size={15} className="text-white" />
                  </a>
                  <a
                    href={`https://wa.me/${contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 flex items-center justify-center shadow-sm shadow-emerald-200 transition-colors duration-150"
                    title="WhatsApp"
                  >
                    <MessageCircle size={15} className="text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {query && filtered.length > 0 && (
          <p className="text-center text-slate-400 text-xs mt-4">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{query}"
          </p>
        )}
      </main>
    </div>
  );
}
