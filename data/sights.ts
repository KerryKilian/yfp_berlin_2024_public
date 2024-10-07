import { Sight } from "Resources";

const sights: Record<string, Sight[]> = {
  de: [
    {
      name: "1. Berliner Fernsehturm",
      short: "Der Fernsehturm ist das höchste Gebäude Deutschlands und ein Symbol der DDR-Architektur.",
      info: "Der Fernsehturm ist eines der berühmtesten Gebäude Berlins und typisch für die Architektur der Deutschen Demokratischen Republik (DDR), d. h. Ostdeutschlands, des kommunistischen Deutschlands. Der Berliner Fernsehturm (368 Meter) ist das höchste Gebäude Deutschlands und wurde 1969 in der DDR fertiggestellt. Damals, Mitte der sechziger Jahre, war der Wettbewerb zwischen Ost und West in vollem Gange. Alles musste höher, schneller und weiter sein. Die Ostblockstaaten waren nach dem erfolgreichen Sputnik-Flug auf dem Vormarsch, und die DDR wollte mit dem Fernsehturm die nächste Sensation schaffen."+
        "Das ehrgeizige Projekt hatte zwei Ziele: ein Symbol der Macht und des technischen Vorsprungs gegenüber dem Westen hochzuhalten und die Rundfunkinfrastruktur zu verbessern, um das Staatsfernsehen zu verbreiten. Dennoch haftete dem DDR-Fernsehen ein schlechtes Image in der Bevölkerung an. In Berlin und entlang der innerdeutschen Grenze schalteten viele Ostdeutsche abends heimlich das Westfernsehen ein."+
        "Nach 1989 stellten Soziologen überrascht fest, dass sich die west- und ostdeutsche Gesellschaft geistig weit weniger auseinanderentwickelt hatte als erwartet. Die Verbreitung des Westfernsehens in der DDR dürfte dabei eine Rolle gespielt haben.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. Das Rote Rathaus",
      short: "Das Rote Rathaus ist der Sitz des Regierenden Bürgermeisters und ein markantes Wahrzeichen Berlins.",
      info: "Es ist der Sitz des Regierenden Bürgermeisters und des Senats von Berlin. Das markante Gebäude ist auch ein bekanntes Wahrzeichen der Stadt. Das Gebäude in der Nähe des Alexanderplatzes hat seinen Namen von seiner Fassade aus leuchtend roten Ziegeln."+
        "Es wurde zwischen 1861 und 1869 im Stil der Neorenaissance erbaut. Jahrhundertelang wurden für den Bau von Kirchen und wichtigen Gebäuden häufig rote Ziegelsteine verwendet, da es in der Region keine großen Steinbrüche gab.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. St. Marienkirche",
      short: "Die St. Marienkirche ist eine der ältesten Kirchen Berlins mit bedeutenden mittelalterlichen Wandmalereien.",
      info: "Die Kirche war ursprünglich eine römisch-katholische Kirche, wurde aber nach der Reformation im Jahr 1539 zu einer evangelisch-lutherischen Kirche. Vor der Kirche befindet sich eine Statue von Martin Luther, dem Begründer der Reformation. Die Marienkirche ist neben der Nikolaikirche die älteste Kirche Berlins."+
        "Besonders sehenswert im Inneren der Kirche ist die Wandmalerei des Totentanzes aus dem Mittelalter. Die Darstellungen des Totentanzes tauchten in Europa während der Pestepidemie auf. Das Wandgemälde bedeutet, dass der Tod plötzlich und unerwartet kommt. In dieser gemalten Theologie des Mittelalters zielt der Tanz mit dem Tod auf das Leben ab: den Lebensweg prüfen, das Unvermeidliche akzeptieren und gleichzeitig über die Grenzen des Lebens im Hier und Jetzt hinausschauen.",
      lat: 52.515072,
      lon: 13.405268,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Marienkirche_%28Berlin%29.jpg/1024px-Marienkirche_%28Berlin%29.jpg",
      img: "st_marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Berliner Dom",
      short: "Der Berliner Dom ist die größte evangelische Kirche Deutschlands und ein beeindruckendes Bauwerk.",
      info: "Die Geschichte des Berliner Doms beginnt im Jahr 1465 mit dem Bau einer kleinen Kirche auf der Spreeinsel. Im Jahr 1747, während der Regierungszeit Friedrichs des Großen, wurde die Kirche im Barockstil mit einer von Johann Boumann dem Älteren entworfenen Kuppel wiederaufgebaut. Etwa 70 Jahre später renovierte Karl Friedrich Schinkel die Kirche im klassizistischen Stil."+
        "Im Laufe der Zeit gab es mehrere kleinere Renovierungen. 1894 entschied Kaiser Wilhelm II., dass die Kathedrale größer werden sollte. Er genehmigte einen Entwurf von Julius Carl Raschdorff, der den Abriss des alten Doms erforderliche. Der neue Dom, der zwischen 1894 und 1905 gebaut wurde, sollte dem Petersdom in Rom Konkurrenz machen. Der neue Berliner Dom wurde zur Hauptkirche der Hohenzollern-Dynastie unter Kaiser Wilhelm II."+
        "Heute ist der Berliner Dom die größte evangelische Kirche in Deutschland.",
      lat: 52.519292,
      lon: 13.401076,
      url: "https://cdn.pixabay.com/photo/2017/10/09/14/48/berlin-2830584_1280.jpg",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Unter den Linden",
      short: "Unter den Linden ist eine historische Allee, die vom Berliner Schloss zum Tiergarten führt.",
      info: "Du betrittst nun die Straße „Unter den Linden“. Diese Straße wurde im 16. Jahrhundert angelegt und mit Lindenbäumen bepflanzt. Sie führte vom Berliner Stadtschloss (heute „Humboldt Forum“) zum Tiergarten, einem großen Park hinter dem Brandenburger Tor. Sie wurde für den Herrscher Johann Georg als Reit- und Jagdweg von seinem Schloss zum Tiergarten angelegt."+
        "Im 18. Jahrhundert verwandelte Friedrich der Große, der von 1740 bis 1786 in Preußen regierte, die Straße in eine prächtige Allee. Seine große Statue (er sitzt auf einem Pferd) findest du ein Stück weiter, genau in der Mitte der Straße."+
        "Friedrich der Große war eine sehr widersprüchliche Persönlichkeit. Einerseits folgte er der Philosophie der Aufklärung und schätzte Bildung und Kultur. Er gründete Schulen, unterstützte die Künste und lud berühmte Denker wie Voltaire an seinen Hof ein. Außerdem förderte er die religiöse Toleranz, erlaubte Menschen unterschiedlichen Glaubens, ihre Religion frei auszuüben, und schaffte die Folter ab. Andererseits förderte er die Militarisierung Preußens, führte drei Kriege um Schlesien und reihte sich durch seine Beteiligung am Siebenjährigen Krieg (1756-1763) in die Riege der europäischen Großmächte jener Zeit (neben Frankreich, Großbritannien, Österreich und Russland) ein. Gemeinsam mit Österreich und Russland initiierte er skrupellos die Teilung und Zerstörung Polens.",
      lat: 52.516073,
      lon: 13.380978,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Unter_den_Linden.jpg/1024px-Unter_den_Linden.jpg",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Berliner Schloss / Humboldt Forum",
      short: "Das Berliner Schloss wurde wieder aufgebaut und dient heute als Humboldt Forum für Kunst und Kultur.",
      info: "Das Berliner Schloss war die Hauptresidenz der preußischen Könige. Während des Zweiten Weltkriegs wurde das Berliner Schloss durch alliierte Bombenangriffe schwer beschädigt. Nach dem Krieg befand sich das Schloss in Ost-Berlin. Die ostdeutsche Regierung beschloss 1950, das zerstörte Schloss abzureißen, da sie es als Symbol der kaiserlichen und preußischen Macht ansah. An seiner Stelle baute die ostdeutsche Regierung den Palast der Republik, der als Parlament der DDR und als Kulturzentrum diente. Dieses Gebäude wurde später geschlossen und wegen des Asbestmaterials, mit dem es gebaut worden war, abgerissen. Nach der Wiedervereinigung Deutschlands wurde der Beschluss gefasst, das Berliner Schloss wieder aufzubauen. Der Wiederaufbau begann 2013, wobei alte Fotos und Pläne verwendet wurden, um das historische Aussehen wiederherzustellen."+
        "Das wiederaufgebaute Schloss, das 2020 fertiggestellt wurde, ist nun als Humboldt-Forum bekannt. Es dient als Museum und Kulturzentrum, in dem Kunst und interaktive Ausstellungen aus der ganzen Welt gezeigt werden.",
      lat: 52.518982,
      lon: 13.393635,
      url: "https://cdn.pixabay.com/photo/2020/07/28/16/32/humboldt-forum-5455874_1280.jpg",
      img: "berliner_schloss",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. Deutsches Historisches Museum",
      short: "Das Deutsche Historische Museum bietet umfassende Einblicke in die deutsche Geschichte.",
      info: "Das Gebäude des Historischen Museums ist das älteste Bauwerk in der Straße Unter den Linden. Ursprünglich wurde es im frühen 18. Jahrhundert als Waffenarsenal errichtet. Später, im 19. Jahrhundert, wurde es zum königlich-preußischen Armeemuseum. Im 20. Jahrhundert wurde es von den Nazis für Ausstellungen genutzt, die die Ideologie und Ziele der Nationalsozialisten unterstützten."+
        "Nach dem Zweiten Weltkrieg wurde es von der ostdeutschen Regierung als zentrales Museum für die sozialistische Geschichte der DDR genutzt. Mit der deutschen Wiedervereinigung im Jahr 1990 übernahm das drei Jahre zuvor in West-Berlin gegründete Deutsche Historische Museum das Gebäude und seine Sammlungen.",
      lat: 52.518889,
      lon: 13.397733,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Deutsches_Historisches_Museum.JPG/1024px-Deutsches_Historisches_Museum.JPG",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Neue Wache",
      short: "Die Neue Wache ist eine zentrale Gedenkstätte für die Opfer von Krieg und Gewaltherrschaft.",
      info: "Die „Neue Wache“ Unter den Linden ist die zentrale Gedenkstätte in Deutschland für die Opfer von Krieg und Gewaltherrschaft. Das relativ kleine Gebäude befindet sich direkt neben dem Zeughaus, in dem heute das Deutsche Historische Museum untergebracht ist. Es wurde zwischen 1816 und 1818 nach Entwürfen von Karl Friedrich Schinkel erbaut und ist seit 1993 die zentrale Gedenkstätte für die Opfer von Krieg und Gewaltherrschaft in der Bundesrepublik Deutschland."+
        "Im Inneren brennt eine „ewige Flamme“ über Urnen mit den sterblichen Überresten eines unbekannten KZ-Häftlings und eines unbekannten Soldaten. Seit 1993 befindet sich im Inneren die Skulptur „Mutter mit totem Sohn“ („Pieta“) von Käthe Kollwitz.",
      lat: 52.518555,
      lon: 13.397676,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Neue_Wache.jpg/1024px-Neue_Wache.jpg",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Staatsoper Berlin",
      short: "Die Staatsoper Berlin ist eines der ältesten Opernhäuser in Deutschland, gegründet 1742.",
      info: "Die Berliner Staatsoper ist eines der ältesten Opernhäuser in Deutschland und wurde 1742 eröffnet. Die Berliner Staatsoper wurde vom preußischen Herrscher Friedrich dem Großen gegründet. Sie sollte ein Zentrum für Oper und Ballett werden.",
      lat: 52.516389,
      lon: 13.385556,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Staatsoper_Berlin_%28Schinkel%29.jpg/1024px-Staatsoper_Berlin_%28Schinkel%29.jpg",
      img: "staatsoper_berlin",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Humboldt-Universität",
      short: "Die Humboldt-Universität zu Berlin wurde 1809 gegründet und ist eine der ältesten Universitäten Berlins.",
      info: "Die Universität von Berlin (heute: Humboldt-Universität zu Berlin) wurde 1809 vom preußischen König Friedrich Wilhelm III. gegründet und nahm 1810 den Lehrbetrieb auf. Im Jahr 1949 wurde die größte und älteste Universität Berlins nach den Universalgelehrten Wilhelm und Alexander von Humboldt benannt. Sie hat ihren Sitz im ehemaligen Palais des Prinzen Heinrich (dem Bruder Friedrichs des Großen).",
      lat: 52.518611,
      lon: 13.388056,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Humboldt-Universit%C3%A4t_zur_Berlin_01.jpg/1024px-Humboldt-Universit%C3%A4t_zur_Berlin_01.jpg",
      img: "humboldt_universitaet",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "Der Bebelplatz erinnert an die Bücherverbrennung der Nazis und ist ein Ort des Gedenkens.",
      info: "Du stehst vor der Juristischen Fakultät der Humboldt-Universität am Bebelplatz. Auf dem Boden befindet sich ein Denkmal von Micha Ullman, das an die Bücherverbrennung vom 10. Mai 1933 erinnert, an dem Ort, an dem die Nazis ein schreckliches Ritual mitten in der Stadt durchführten."+
        "In der Mitte des Bebelplatzes öffnet sich der Boden. Passanten können durch eine Glasscheibe in einen weißen, leeren Raum mit Regalen blicken, in denen einst Bücher standen. Das Nazi-Regime verbrannte Bücher, um die Universitäten mit seiner Ideologie zu indoktrinieren. Nur drei Monate nach Hitlers Machtübernahme sollten die Brände zeigen, dass die „nationalsozialistische Revolution“ auch Schriftsteller und Autoren nicht verschonen würde. Der Nazi-Autor Hanns Johst sagte später, dass die Revolution auch vor den Schreibtischen der Schriftsteller nicht Halt machen würde."+
        "Zuvor hatte der Deutsche Studentenbund die Universitäten aufgerufen, gegen den „jüdischen Umsturzgeist“ mobil zu machen. Es wurden Listen mit verbotenen Büchern veröffentlicht, z. B. wurden Bücher von Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud usw. als „unmoralisch“ und „dekadent“ bezeichnet.",
      lat: 52.516114,
      lon: 13.387328,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bebelplatz.jpg/1024px-Bebelplatz.jpg",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstraße",
      short: "Die Friedrichstraße ist eine bedeutende Straße im historischen Zentrum Berlins.",
      info: "Die Friedrichstraße ist eine der berühmtesten Straßen im historischen Zentrum Berlins und wurde nach dem Kurfürsten Friedrich III. von Brandenburg benannt, der 1701 der erste preußische König wurde, Friedrich I., „König in Preußen“. Zu Beginn des 20. Jahrhunderts entwickelte sich die Kreuzung mit dem Boulevard Unter den Linden zu einer der belebtesten der Stadt. Unzählige Pferdekutschen, Droschken, Kraftfahrzeuge, Handkarren, Busse, Radfahrer und Fußgänger teilten sich die Straße.",
      lat: 52.517778,
      lon: 13.387222,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Friedrichstra%C3%9Fe_Berlin_1910.jpg/1024px-Friedrichstra%C3%9Fe_Berlin_1910.jpg",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "Das Hotel Adlon ist eines der luxuriösesten und bekanntesten Hotels in Berlin.",
      info: "Das Hotel Adlon Kempinski ist eines der luxuriösesten und bekanntesten Hotels in Deutschland. Es wurde 1997 wiedereröffnet und steht in der Tradition des 1907 eröffneten und 1945 stark zerstörten ursprünglichen Hotels Adlon.",
      lat: 52.516444,
      lon: 13.388077,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hotel_Adlon_2011.jpg/1024px-Hotel_Adlon_2011.jpg",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. Brandenburger Tor",
      short: "Das Brandenburger Tor ist ein ikonisches Symbol Berlins und wurde 1789-1791 erbaut.",
      info: "Das Brandenburger Tor wurde zwischen 1788 und 1791 erbaut. Es wurde von König Friedrich Wilhelm II. von Preußen in Auftrag gegeben und vom Architekten Carl Gotthard Langhans entworfen. Das Tor ist im klassizistischen Stil erbaut und hat eine Höhe von 26 Metern. Ursprünglich wurde es als Symbol des Friedens errichtet. Die Quadriga, ein von vier Pferden gezogener Streitwagen, wird von Eirene, der Göttin des Friedens, gelenkt."+
        "Als Napoleon 1806 Berlin eroberte, nahm er die Quadriga und die Statue auf der Spitze des Tores mit nach Paris. Nachdem Napoleon 1814 besiegt worden war, wurde die Quadriga nach Berlin zurückgebracht und wieder auf dem Tor aufgestellt."+
        "Nach dem Zweiten Weltkrieg und der Teilung Berlins stand das Brandenburger Tor direkt neben der Berliner Mauer und wurde zum Symbol der deutschen Teilung. Als 1989 die Berliner Mauer fiel, wurde das Tor zu einem Symbol der deutschen Wiedervereinigung."+
        "Die Gebäude westlich des Brandenburger Tors gehören nicht mehr zum historischen Teil Berlins, d. h. zum Berlin vor 1750. Der ehemalige amerikanisch kontrollierte Teil Berlins (1945-1990) beginnt am Brandenburger Tor.",
      lat: 52.516275,
      lon: 13.377710,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Brandenburger_Tor.jpg/1024px-Brandenburger_Tor.jpg",
      img: "brandenburger_tor",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Denkmal für die ermordeten Juden Europas",
      short: "Das Denkmal für die ermordeten Juden Europas erinnert an die Opfer des Holocausts.",
      info: "Das Denkmal für die ermordeten Juden Europas in der historischen Mitte Berlins erinnert an die rund sechs Millionen Juden, die unter der Herrschaft Adolf Hitlers und der Nationalsozialisten ermordet wurden. Das Denkmal wurde von Peter Eisenman entworfen und besteht aus 2711 quaderförmigen Betonstelen auf einer Gesamtfläche von 19.000 Quadratmetern. Es ist seit dem 12. Mai 2005 für die Öffentlichkeit zugänglich und soll Politiker und Menschen im Zentrum der Stadt an die Verbrechen des nationalsozialistischen Deutschlands erinnern, damit sie sich nie wiederholen.",
      lat: 52.514493,
      lon: 13.390876,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Denkmal_f%C3%BCr_die_ermordeten_Juden_Europas.jpg/1024px-Denkmal_f%C3%BCr_die_ermordeten_Juden_Europas.jpg",
      img: "denkmal_fuer_die_ermordeten_juden_europas",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (Deutsches Parlament)",
      short: "Der Reichstag ist ein bedeutendes historisches Gebäude und Sitz des Deutschen Bundestages.",
      info: "Das Reichstagsgebäude wurde von 1884 bis 1894 erbaut. Mit der Ausrufung des Deutschen Reiches im Jahr 1871 wurde Berlin zur Reichshauptstadt. Das neu gegründete Parlament brauchte nun einen Sitz. Seit 1990 ist das Reichstagsgebäude der Sitz des Deutschen Bundestages."+
        "Bedeutende Wendepunkte und Ereignisse der deutschen Geschichte sind mit dem Reichstagsgebäude verbunden. Am 9. November 1918 rief der SPD-Politiker Philipp Scheidemann vom Balkon des Westportals aus die Republik aus. Am Abend des 27. Februar 1933 ereignete sich der „Reichstagsbrand“. Der Plenarsaal und die Kuppel wurden vollständig zerstört. Eine rote Fahne der Sowjetunion, die am 30. April 1945 von zwei Rotarmisten gehisst wurde, symbolisierte den Sieg über das „Dritte Reich“. ",
      lat: 52.518611,
      lon: 13.376111,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Reichstag_berlin.jpg/1024px-Reichstag_berlin.jpg",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "Der Tiergarten ist Berlins großer Stadtpark und ein beliebtes Erholungsgebiet.",
      info: "Der Tiergarten ist das grüne Herz von Berlin. Der Tiergarten hat bereits mehrere Umgestaltungen erlebt. Ende des 17. Jahrhunderts ließ Kurfürst Friedrich III. das ehemalige Jagdrevier in einen „Lustpark für die Bevölkerung“ umwandeln. Im Laufe der Zeit wurde der Park nach verschiedenen Vorbildern umgestaltet, darunter die Umwandlung des Tiergartens in einen englischen Volkspark Mitte des 19. Jahrhunderts. Vor allem im letzten Jahr des Zweiten Weltkriegs wurde der Park stark zerstört. Nach dem Krieg wurde der Park auf der Suche nach Brennholz von den Berlinern fast vollständig abgeholzt. Die Wiederaufforstung des Parks begann 1949 und konnte damals fast nur mit Baumspenden aus anderen deutschen Städten durchgeführt werden.",
      lat: 52.515833,
      lon: 13.361111,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tiergarten_Berlin.jpg/1024px-Tiergarten_Berlin.jpg",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Siegessäule",
      short: "Die Siegessäule ist ein bedeutendes Nationaldenkmal Berlins und ein Symbol des deutschen Sieges.",
      info: "Die Siegessäule auf dem Großen Stern im Großen Tiergarten ist eines der bedeutendsten Nationaldenkmäler Deutschlands und eine der wichtigsten Sehenswürdigkeiten Berlins. Sie wurde zwischen 1864 und 1873 zum Gedenken an die Einigungskriege errichtet und 1939 an ihren heutigen Standort versetzt. Ursprünglich stand sie vor dem Reichstag.",
      lat: 52.514444,
      lon: 13.350833,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      img: "siegessaeule",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  en: [
    {
      name: "1. TV Tower („Fernsehturm“)",
      short: "The TV Tower is one of the most famous buildings in Berlin and it is typical for the architecture of the German Democratic Republic (GDR), i.e., Eastern Germany, the communist Germany.",
      info: "The Berlin TV Tower (368 meters) is the tallest building in Germany, completed in 1969 in the GDR. Back then, in the mid-sixties, the competition between East and West was in full swing. Everything had to be higher, faster, and further. The Eastern Bloc countries were on the rise after the successful Sputnik flight, and the GDR aimed to create the next sensation with the television tower. The ambitious project had two goals: to hold up a symbol of power and technical advantage over the West, and to improve the broadcasting infrastructure to help spread state television. Nevertheless, GDR television retained a bad image among the population. In Berlin and all along the inner-German border, many East Germans secretly switched on Western television in the evenings. After 1989, sociologists were surprised to find that West and East German society had mentally diverged far less than expected. The spread of Western television in the GDR probably played a part in this.",
      img: "tv_tower",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. The Red City Hall („Rotes Rathaus“)",
      short: "It is the seat of the Governing Mayor and the Senate of Berlin. The striking building is also a well-known landmark of the city.",
      info: "The building near Alexanderplatz gets its name from its facade with bright red bricks. It was built in Neo-Renaissance style between 1861-1869. For centuries, red bricks were often used for the construction of churches and important buildings due to the lack of large stone mines in the region.",
      img: "red_city_hall",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. St. Mary's Church („Marienkirche“)",
      short: "The church was originally a Roman Catholic church but it became a Lutheran Protestant church since the Reformation in 1539.",
      info: "You can also find a statue of Martin Luther, the founder of the Reformation, outside the church. Along with the St. Nicolas Church, the St. Mary Church is the oldest church in Berlin. Particularly worth seeing inside the church is the mural of the Dance of Death from the Middle Ages. The depictions of the Dance of Death appeared in Europe during the plague epidemic. The mural signifies that death comes suddenly and unexpectedly. In this painted theology of the Middle Ages, the dance with death is aimed at life: examining the way of life, accepting the inevitable, and at the same time looking beyond the limits of life here and now.",
      img: "st_marys_church",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Berlin Cathedral („Berliner Dom“)",
      short: "The history of the Berlin Cathedral starts in 1465 when the construction of a small church on Spree Island began.",
      info: "In 1747, during the reign of Frederick the Great, the church was rebuilt in the Baroque style with a dome designed by Johann Boumann the Elder. About 70 years later, Karl Friedrich Schinkel renovated the church in a classicist style. Over time, there were several small renovations. Then, in 1894, Emperor Wilhelm II decided the cathedral needed to be grander. He approved a design by Julius Carl Raschdorff, which required tearing down the old cathedral. The new cathedral, built between 1894 and 1905, was meant to rival St. Peter's Basilica in Rome. This new Berlin Cathedral became the main church for the Hohenzollern dynasty under Emperor Wilhelm II. Nowadays, Berlin Cathedral is the largest Protestant church in Germany.",
      img: "berlin_cathedral",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. „Unter den Linden“ Street",
      short: "You are about to enter \"Unter den Linden\" street, which means \"Under the Linden Trees.\"",
      info: "This street was created in the 16th century and planted with linden trees. It led from the Berlin City Palace (now \"Humboldt Forum\") to the Tiergarten, a large park behind the Brandenburg Gate. It was planned for Ruler Johann Georg as a riding and hunting path leading from his palace to the Tiergarten. In the 18th century, Frederick the Great, who ruled Prussia from 1740 till 1786, turned the street into a magnificent avenue. You will find his large statue (him sitting on a horse) a little further along, right in the middle of the street. Frederick the Great was a very contradictory personality. On the one hand, he followed the philosophy of enlightenment and valued education and culture. He founded schools, supported the arts and invited famous thinkers such as Voltaire to his court. He also promoted religious tolerance, allowed people of different faiths to practise their religion freely and abolished torture. On the other hand, he promoted the militarization of Prussia, waged three wars for Silesia and joined the ranks of the great European powers of the time (alongside France, Great Britain, Austria and Russia) through his involvement in the Seven Years' War of 1756-1763. Together with Austria and Russia, he unscrupulously initiated the partition and destruction of Poland.",
      img: "unter_den_linden",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. The Berlin Palace/ today Humboldt Forum",
      short: "The Berlin Palace was the main residence of the Prussian kings.",
      info: "During World War II, the Berlin Palace was heavily damaged by Allied bombing. After the war, the palace was located in East Berlin. The East German government decided to demolish the ruined palace in 1950, viewing it as a symbol of imperial and Prussian power. In its place, the East German government built the Palast der Republik (Palace of the Republic), which served as the parliament of the GDR and as a cultural center. This building was later closed and demolished due to material asbestos it was build with. After the reunification of Germany, there was a decision to rebuild the Berlin Palace. The reconstruction started in 2013, using old photographs and plans to recreate its historical appearance. The rebuilt palace, completed in 2020, is now known as the Humboldt Forum. It serves as a museum and cultural center, showcasing art and interactive exhibitions from around the world.",
      img: "berlin_palace",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. The German Historical Museum („Das Deutsche Historische Museum”)",
      short: "The building of the Historical Museum is the oldest construction on Unter den Linden street.",
      info: "It was initially built as a weapons arsenal in the early 18th century. Later, in the 19th century, it became the Royal Prussian Army Museum. In the 20th century, it was used by the Nazis for exhibitions that supported the ideology and goals of the National Socialists. After World War II, it was used by the East German government as the central museum of socialist history in the GDR. With German reunification in 1990, the German Historical Museum, which had been founded three years earlier in West Berlin, took over the building and its collections.",
      img: "german_historical_museum",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. New Guard („Neue Wache“)",
      short: "„Neue Wache“ on Unter den Linden is the central memorial in Germany for the victims of war and tyranny.",
      info: "This relatively small building is located right next to the armory, which now houses the German Historical Museum. It was built between 1816 and 1818 based on designs by Karl Friedrich Schinkel and became the central memorial in the Federal Republic of Germany for the victims of war and tyranny in 1993. Inside, an „eternal flame“ is burning over urns containing the remains of an unknown concentration camp prisoner and an unknown soldier. The sculpture “Mother with dead son” (“Pieta”) by Käthe Kollwitz has been inside since 1993.",
      img: "neue_wache",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Berlin State Opera",
      short: "The Berlin State Opera is one of the oldest opera houses in Germany and was opened in 1742.",
      info: "The Berlin State Opera was founded by the Ruler Frederick the Great of Prussia. It was intended to be a center for opera and ballet.",
      img: "berlin_state_opera",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Humboldt University",
      short: "The University of Berlin (today: Humboldt-Universität zu Berlin) was founded in 1809 by the Prussian King Friedrich Wilhelm III and began teaching in 1810.",
      info: "In 1949, the largest and oldest university in Berlin was named after the universal scholars Wilhelm and Alexander von Humboldt. It has its headquarters in the former palace of Prince Heinrich (the brother of Frederick the Great).",
      img: "humboldt_university",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "You are standing in front of the Faculty of Law at Humboldt University on Bebelplatz.",
      info: "On the ground, you can find a memorial by Micha Ullman dedicated to the book burning on May 10, 1933, at the place where the Nazis carried out a terrible ritual in the middle of the city. In the center of Bebelplatz, the floor opens up. Passers-by can look through a pane of glass into a white, empty room with shelves that once held books. The Nazi regime burned books to indoctrinate universities with their ideology. Just three months after Hitler came to power, the fires were intended to show that the „National Socialist Revolution“ would not spare writers and authors. Nazi author Hanns Johst later said that the revolution would not stop at writers' desks either. Before, the German Student Union had called on universities to mobilize against the „Jewish spirit of subversion“. Lists of banned books were published, e.g., books by Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud etc. were labeled „immoral“ and „decadent“.",
      img: "bebelplatz",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstraße",
      short: "Friedrichstraße is one of the most famous streets in the historic center of Berlin and was named after the Elector Frederick III of Brandenburg.",
      info: "Friedrichstraße is one of the most famous streets in the historic center of Berlin and was named after the Elector Frederick III of Brandenburg, who became the first Prussian king in 1701, Frederick I, “King in Prussia”. At the beginning of the 20th century, the intersection with the boulevard Unter den Linden developed into one of the busiest in the city. Countless horse-drawn carriages, cabs, motor vehicles, handcarts, buses, cyclists and pedestrians shared the street.",
      img: "friedrichstrasse",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "The Hotel Adlon Kempinski is one of the most luxurious and best-known hotels in Germany.",
      info: "It was reopened in 1997 and follows the tradition of the original Hotel Adlon, which opened in 1907 and was badly destroyed in 1945.",
      img: "hotel_adlon",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. The Brandenburg Gate",
      short: "The Brandenburg Gate was built between 1788 and 1791.",
      info: "It was commissioned by King Frederick William II of Prussia and designed by architect Carl Gotthard Langhans. The gate is built in the classical style and stands 26 meters tall. It was originally constructed as a symbol of peace. The Quadriga, a chariot drawn by four horses, is driven by Eirene, the goddess of peace. In 1806, when Napoleon conquered Berlin, he took the Quadriga, the statue on top of the gate, to Paris. After Napoleon was defeated in 1814, the Quadriga was returned to Berlin and placed back on the gate. After World War II and the division of Berlin, the Brandenburg Gate was right next to the Berlin Wall and became a symbol of Germany's division. When the Berlin Wall fell in 1989, the gate became a symbol of Germany's reunification. The buildings west of the Brandenburg Gate are no longer part of the historical part of Berlin, i.e. Berlin before the 1750s. The former American-controlled sector of Berlin (1945-1990) begins at the Brandenburg Gate.",
      img: "brandenburg_gate",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Memorial to the Murdered Jews of Europe",
      short: "The Memorial to the Murdered Jews of Europe in the historic center of Berlin commemorates the approximately six million Jews who were murdered under the rule of Adolf Hitler and the National Socialists.",
      info: "The memorial was designed by Peter Eisenman and consists of 2711 cuboid concrete stelae covering a total area of 19,000 square meters. It has been open to the public since May 12, 2005 and is intended to remind politicians and people in the center of the city of the crimes of National Socialist Germany so that they are never repeated again.",
      img: "memorial_murdered_jews",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (German Parliament)",
      short: "The Reichstag building was built from 1884 to 1894.",
      info: "With the proclamation of the German Empire in 1871, Berlin became the imperial capital. The newly formed parliament now needed a seat. The Reichstag building has been the seat of the German Bundestag since 1990. Significant turning points and events in German history are associated with the Reichstag building. On November 9, 1918, SPD politician Philipp Scheidemann proclaimed the Republic from the balcony at the west portal. On the evening of February 27, 1933, the “Reichstag fire” occurred. The plenary chamber and the dome were completely destroyed. A red flag of the Soviet Union, hoisted by two Red Army soldiers on 30 April 1945, symbolized the victory over the “Third Reich”.",
      img: "reichstag",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "The Tiergarten is the green heart of Berlin.",
      info: "The Tiergarten has already undergone several transformations. At the end of the 17th century, Elector Friedrich III had the former hunting grounds turned into a “pleasure park for the population”. Over the course of time, the park was redesigned according to several models, including the transformation of the Tiergarten into an English public park in the middle of the 19th century. The last year of World War II in particular was catastrophic for the park. After the war, the park was almost completely stripped bare by Berliners looking for firewood. The reforestation of the park began in 1949 and at that time could almost only be carried out with tree donations from other German cities.",
      img: "tiergarten",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Victory Column",
      short: "The Victory Column on the Großer Stern in the Großer Tiergarten is one of Germany's most important national monuments and one of Berlin's most important sights.",
      info: "The Victory Column on the Großer Stern in the Großer Tiergarten is one of Germany's most important national monuments and one of Berlin's most important sights. Built between 1864 and 1873 to commemorate the Wars of Unification, it was moved to its current location in 1939. It originally stood in front of the Reichstag",
      img: "victory_column",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  it: [
    {
      name: "1. Torre della televisione (“Fernsehturm”)",
      short: "La Torre della TV è l'edificio più alto di Berlino e un simbolo dell'architettura della DDR.",
      info: "La Torre della TV è uno degli edifici più famosi di Berlino ed è tipica dell'architettura della Repubblica Democratica Tedesca (DDR), cioè della Germania orientale, la Germania comunista. La Torre della televisione di Berlino (368 metri) è l'edificio più alto della Germania, completato nel 1969 nella DDR. All'epoca, a metà degli anni Sessanta, la competizione tra Est e Ovest era in pieno svolgimento. Tutto doveva essere più alto, più veloce e più lontano. I Paesi del blocco orientale erano in ascesa dopo il successo del volo Sputnik e la DDR mirava a creare la prossima sensazione con la torre televisiva. L'ambizioso progetto aveva due obiettivi: mantenere un simbolo di potenza e di vantaggio tecnico rispetto all'Occidente e migliorare l'infrastruttura di trasmissione per contribuire alla diffusione della televisione di Stato. Ciononostante, la televisione della DDR conservò una cattiva immagine tra la popolazione. A Berlino e lungo il confine interno della Germania, molti tedeschi dell'Est accendevano segretamente la televisione occidentale la sera. Dopo il 1989, i sociologi furono sorpresi di scoprire che la società tedesca occidentale e quella orientale si erano mentalmente allontanate molto meno del previsto. La diffusione della televisione occidentale nella DDR ha probabilmente avuto un ruolo in questo senso.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. Il Municipio rosso (“Rotes Rathaus”)",
      short: "Sede del sindaco di Berlino, noto per la sua facciata in mattoni rossi.",
      info: "È la sede del sindaco e del Senato di Berlino. L'imponente edificio è anche un noto punto di riferimento della città. L'edificio, situato vicino ad Alexanderplatz, prende il nome dalla sua facciata in mattoni rosso vivo. Fu costruito in stile neorinascimentale tra il 1861 e il 1869. Per secoli, i mattoni rossi sono stati spesso utilizzati per la costruzione di chiese ed edifici importanti a causa della mancanza di grandi miniere di pietra nella regione.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Chiesa di Santa Maria (“Marienkirche”)",
      short: "Una delle chiese più antiche di Berlino, nota per il murale della Danza della Morte.",
      info: "La chiesa era originariamente una chiesa cattolica romana, ma è diventata una chiesa protestante luterana dopo la Riforma del 1539. All'esterno della chiesa si trova una statua di Martin Lutero, il fondatore della Riforma. Insieme alla Chiesa di San Nicola, la Chiesa di Santa Maria è la chiesa più antica di Berlino. All'interno della chiesa merita una visita particolare il murale della Danza della Morte, risalente al Medioevo. Le rappresentazioni della Danza della Morte sono apparse in Europa durante l'epidemia di peste. Il murale sta a significare che la morte arriva all'improvviso e inaspettatamente. In questa teologia dipinta del Medioevo, la danza con la morte è rivolta alla vita: esaminare il modo di vivere, accettare l'inevitabile e allo stesso tempo guardare oltre i limiti della vita qui e ora.",
      lat: 52.521918,
      lon: 13.407355,
      url: "https://pixabay.com/de/photos/architettura-berlino-cattedrale-marienkirche-4262511/",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Cattedrale di Berlino (“Berliner Dom”)",
      short: "La cattedrale barocca di Berlino, un simbolo della potenza prussiana.",
      info: "La storia del Duomo di Berlino inizia nel 1465, quando si iniziò a costruire una piccola chiesa sull'isola della Sprea. Nel 1747, durante il regno di Federico il Grande, la chiesa fu ricostruita in stile barocco con una cupola progettata da Johann Boumann il Vecchio. Circa 70 anni dopo, Karl Friedrich Schinkel ristrutturò la chiesa in stile classicista. Nel corso del tempo si susseguirono diversi piccoli restauri. Poi, nel 1894, l'imperatore Guglielmo II decise che la cattedrale doveva essere più grande. Approvò un progetto di Julius Carl Raschdorff, che richiedeva la demolizione della vecchia cattedrale. La nuova cattedrale, costruita tra il 1894 e il 1905, doveva rivaleggiare con la Basilica di San Pietro a Roma. La nuova cattedrale di Berlino divenne la chiesa principale della dinastia Hohenzollern sotto l'imperatore Guglielmo II. Oggi il Duomo di Berlino è la più grande chiesa protestante della Germania.",
      lat: 52.518633,
      lon: 13.401409,
      url: "https://pixabay.com/de/photos/berlin-cattedrale-cattedrale-4341693/",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Via “Unter den Linden”",
      short: "Una delle strade principali di Berlino, famosa per i suoi tigli e monumenti storici.",
      info: "State per entrare nella via “Unter den Linden”, che significa “Sotto i tigli”. Questa strada fu creata nel XVI secolo e piantata con alberi di tiglio. Conduceva dal Palazzo di Città di Berlino (oggi “Humboldt Forum”) al Tiergarten, un grande parco dietro la Porta di Brandeburgo. Fu progettato per il sovrano Johann Georg come percorso di caccia e di equitazione dal suo palazzo al Tiergarten. Nel XVIII secolo, Federico il Grande, che governò la Prussia dal 1740 al 1786, trasformò la strada in un magnifico viale. La sua grande statua (lui seduto su un cavallo) si trova poco più avanti, proprio al centro della strada. Federico il Grande era una personalità molto contraddittoria. Da un lato, seguiva la filosofia dell'illuminismo e apprezzava l'istruzione e la cultura. Fondò scuole, sostenne le arti e invitò alla sua corte pensatori famosi come Voltaire. Promosse anche la tolleranza religiosa, permettendo a persone di fedi diverse di praticare liberamente la propria religione e abolendo la tortura. D'altro canto, promosse la militarizzazione della Prussia, condusse tre guerre per la Slesia e si unì alla schiera delle grandi potenze europee dell'epoca (insieme a Francia, Gran Bretagna, Austria e Russia) attraverso il coinvolgimento nella Guerra dei Sette Anni del 1756-1763. Insieme all'Austria e alla Russia, avviò senza scrupoli la spartizione e la distruzione della Polonia.",
      lat: 52.516057,
      lon: 13.375529,
      url: "https://pixabay.com/de/photos/berlino-unter-den-linden-1439724/",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Il Palazzo di Berlino/ oggi Humboldt Forum",
      short: "Residenza imperiale trasformata in centro culturale e museo.",
      info: "Il Palazzo di Berlino era la residenza principale dei re prussiani. Durante la Seconda Guerra Mondiale, il Palazzo di Berlino fu pesantemente danneggiato dai bombardamenti alleati. Dopo la guerra, il palazzo si trovava a Berlino Est. Il governo della Germania Est decise di demolire il palazzo in rovina nel 1950, considerandolo un simbolo del potere imperiale e prussiano. Al suo posto, il governo della Germania Est costruì il Palast der Republik (Palazzo della Repubblica), che fungeva da parlamento della DDR e da centro culturale. Questo edificio fu poi chiuso e demolito a causa del materiale di amianto con cui era stato costruito. Dopo la riunificazione della Germania, si decise di ricostruire il Palazzo di Berlino. La ricostruzione è iniziata nel 2013, utilizzando vecchie fotografie e progetti per ricreare il suo aspetto storico. Il palazzo ricostruito, completato nel 2020, è ora noto come Humboldt Forum. Serve come museo e centro culturale, con mostre d'arte e interattive provenienti da tutto il mondo.",
      lat: 52.518393,
      lon: 13.398499,
      url: "https://pixabay.com/de/photos/humboldt-forum-berlino-3873897/",
      img: "humboldt_forum",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. Il Museo Storico Tedesco (“Das Deutsche Historische Museum”)",
      short: "Museo che esplora la storia tedesca, ospitato nell'edificio più antico di Unter den Linden.",
      info: "L'edificio del Museo Storico è la costruzione più antica di via Unter den Linden. Inizialmente fu costruito come arsenale per le armi all'inizio del XVIII secolo. Successivamente, nel XIX secolo, divenne il Museo dell'Esercito Reale Prussiano. Nel XX secolo fu utilizzato dai nazisti per mostre che sostenevano l'ideologia e gli obiettivi del nazionalsocialismo. Dopo la Seconda Guerra Mondiale, fu utilizzato dal governo della Germania Est come museo centrale della storia socialista della DDR. Con la riunificazione della Germania nel 1990, il Museo Storico Tedesco, fondato tre anni prima a Berlino Ovest, rilevò l'edificio e le sue collezioni.",
      lat: 52.516651,
      lon: 13.388361,
      url: "https://pixabay.com/de/photos/museo-della-storia-berlino-3895714/",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Nuova Guardia (“Neue Wache”)",
      short: "Monumento commemorativo per le vittime di guerra e tirannia con una scultura di Käthe Kollwitz.",
      info: "La “Neue Wache”, sulla Unter den Linden, è il monumento commemorativo centrale in Germania per le vittime della guerra e della tirannia. Questo edificio relativamente piccolo si trova proprio accanto all'armeria, che oggi ospita il Museo Storico Tedesco. Fu costruito tra il 1816 e il 1818 su progetto di Karl Friedrich Schinkel e nel 1993 è diventato il monumento commemorativo centrale della Repubblica Federale Tedesca per le vittime della guerra e della tirannia. All'interno, una “fiamma eterna” arde su urne contenenti i resti di un prigioniero sconosciuto del campo di concentramento e di un soldato sconosciuto. La scultura “Madre con figlio morto” (“Pietà”) di Käthe Kollwitz si trova all'interno dal 1993.",
      lat: 52.516649,
      lon: 13.387226,
      url: "https://pixabay.com/de/photos/denkmal-nuova-wache-berlino-3895717/",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Opera di Stato di Berlino",
      short: "Uno dei più antichi teatri d'opera della Germania, inaugurato nel 1742.",
      info: "L'Opera di Stato di Berlino è uno dei più antichi teatri d'opera della Germania ed è stato inaugurato nel 1742. L'Opera di Stato di Berlino fu fondata dal sovrano Federico il Grande di Prussia. Doveva essere un centro per l'opera e il balletto.",
      lat: 52.515155,
      lon: 13.380670,
      url: "https://pixabay.com/de/photos/teatro-dell-opera-di-berlino-3388481/",
      img: "staatsoper_berlin",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Università Humboldt",
      short: "Fondato nel 1809, è uno dei principali istituti di ricerca di Berlino.",
      info: "L'Università di Berlino (oggi: Humboldt-Universität zu Berlin) fu fondata nel 1809 dal re prussiano Federico Guglielmo III e iniziò a insegnare nel 1810. Nel 1949, la più grande e antica università di Berlino è stata intitolata agli studiosi universali Wilhelm e Alexander von Humboldt. Ha sede nell'ex palazzo del principe Heinrich (fratello di Federico il Grande).",
      lat: 52.516072,
      lon: 13.388582,
      url: "https://pixabay.com/de/photos/universit%C3%A0-humboldt-berlino-4501749/",
      img: "humboldt_universitaet",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "Luogo del rogo di libri nazista, con una commemorazione sotterranea.",
      info: "Ci si trova di fronte alla Facoltà di Giurisprudenza dell'Università Humboldt, in Bebelplatz. A terra si trova un monumento di Micha Ullman dedicato al rogo dei libri avvenuto il 10 maggio 1933, nel luogo in cui i nazisti compirono un terribile rituale nel cuore della città. Al centro di Bebelplatz, il pavimento si apre. I passanti possono guardare attraverso una lastra di vetro in una stanza bianca e vuota con scaffali che un tempo contenevano libri. Il regime nazista bruciava i libri per indottrinare le università con la propria ideologia. Appena tre mesi dopo l'ascesa al potere di Hitler, gli incendi avevano lo scopo di dimostrare che la “rivoluzione nazionalsocialista” non avrebbe risparmiato scrittori e autori. Lo scrittore nazista Hanns Johst disse in seguito che la rivoluzione non si sarebbe fermata nemmeno sulle scrivanie degli scrittori. In precedenza, l'Unione studentesca tedesca aveva invitato le università a mobilitarsi contro lo “spirito di sovversione ebraico”. Furono pubblicati elenchi di libri proibiti, ad esempio, i libri di Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud ecc. furono etichettati come “immorali” e “decadenti”.",
      lat: 52.516076,
      lon: 13.388747,
      url: "https://pixabay.com/de/photos/bebelplatz-berlino-1848073/",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstraße",
      short: "Una delle strade più trafficate di Berlino, nota per la sua vivacità.",
      info: "Friedrichstraße è una delle strade più famose del centro storico di Berlino e prende il nome dall'Elettore Federico III di Brandeburgo, che nel 1701 divenne il primo re prussiano, Federico I, “Re di Prussia”. All'inizio del XX secolo, l'incrocio con il viale Unter den Linden divenne uno dei più trafficati della città. Innumerevoli carrozze a cavallo, taxi, veicoli a motore, carretti a mano, autobus, ciclisti e pedoni condividevano la strada.",
      lat: 52.516406,
      lon: 13.387928,
      url: "https://pixabay.com/de/photos/friedrichstra%C3%9Fe-berlino-2817997/",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "Lussuoso albergo storico, famoso per il suo servizio e la sua posizione.",
      info: "L'Hotel Adlon Kempinski è uno degli alberghi più lussuosi e conosciuti della Germania. È stato riaperto nel 1997 e segue la tradizione dell'originale Hotel Adlon, aperto nel 1907 e gravemente distrutto nel 1945.",
      lat: 52.519200,
      lon: 13.390255,
      url: "https://pixabay.com/de/photos/hotel-adlon-berlino-3626269/",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. La Porta di Brandeburgo",
      short: "Simbolo storico di Berlino, costruita tra il 1788 e il 1791.",
      info: "La Porta di Brandeburgo fu costruita tra il 1788 e il 1791. Fu commissionata dal re Federico Guglielmo II di Prussia e progettata dall'architetto Carl Gotthard Langhans. La porta è costruita in stile classico ed è alta 26 metri. Originariamente fu costruita come simbolo di pace. La Quadriga, un carro trainato da quattro cavalli, è guidata da Eirene, la dea della pace. Nel 1806, quando Napoleone conquistò Berlino, portò la Quadriga e la statua in cima alla porta a Parigi. Dopo la sconfitta di Napoleone nel 1814, la Quadriga fu riportata a Berlino e rimessa sulla porta. Dopo la Seconda Guerra Mondiale e la divisione di Berlino, la Porta di Brandeburgo si trovava proprio accanto al Muro di Berlino e divenne un simbolo della divisione della Germania. Quando il Muro di Berlino cadde nel 1989, la Porta divenne un simbolo della riunificazione della Germania. Gli edifici a ovest della Porta di Brandeburgo non fanno più parte della parte storica di Berlino, cioè della Berlino precedente al 1750. L'ex settore di Berlino controllato dagli americani (1945-1990) inizia alla Porta di Brandeburgo.",
      lat: 52.516275,
      lon: 13.377705,
      url: "https://pixabay.com/de/photos/porta-di-brandeburgo-berlino-3895711/",
      img: "brandenburger_tor",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Memoriale agli ebrei assassinati in Europa",
      short: "Monumento che commemora i sei milioni di ebrei uccisi durante l'Olocausto.",
      info: "Il Memoriale agli ebrei assassinati d'Europa, nel centro storico di Berlino, commemora i circa sei milioni di ebrei uccisi sotto il governo di Adolf Hitler e dei nazionalsocialisti. Il memoriale è stato progettato da Peter Eisenman e consiste in 2711 stele cuboidi di cemento che coprono una superficie totale di 19.000 metri quadrati. È aperto al pubblico dal 12 maggio 2005 e ha lo scopo di ricordare ai politici e ai cittadini del centro della città i crimini della Germania nazionalsocialista, affinché non si ripetano mai più.",
      lat: 52.514498,
      lon: 13.390563,
      url: "https://pixabay.com/de/photos/memoriale-agli-ebrei-berlino-3654721/",
      img: "memoriale_ebraico",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (Parlamento tedesco)",
      short: "Sede storica del parlamento tedesco, con una cupola di vetro iconica.",
      info: "L'edificio del Reichstag fu costruito dal 1884 al 1894. Con la proclamazione dell'Impero tedesco nel 1871, Berlino divenne la capitale imperiale. Il nuovo parlamento aveva bisogno di una sede. Dal 1990 l'edificio del Reichstag è la sede del Bundestag tedesco. L'edificio del Reichstag è associato a importanti svolte ed eventi della storia tedesca. Il 9 novembre 1918, il politico della SPD Philipp Scheidemann proclamò la Repubblica dal balcone del portale occidentale. La sera del 27 febbraio 1933 si verificò l'“incendio del Reichstag”. La sala plenaria e la cupola furono completamente distrutte. Una bandiera rossa dell'Unione Sovietica, issata da due soldati dell'Armata Rossa il 30 aprile 1945, simboleggiava la vittoria sul “Terzo Reich”.",
      lat: 52.518611,
      lon: 13.376111,
      url: "https://pixabay.com/de/photos/reichstag-berlino-3184601/",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "Il grande parco di Berlino, trasformato in un parco pubblico nel XIX secolo.",
      info: "Il Tiergarten è il cuore verde di Berlino. Il Tiergarten ha già subito diverse trasformazioni. Alla fine del XVII secolo, l'Elettore Federico III fece trasformare l'ex riserva di caccia in un “parco di piacere per la popolazione”. Nel corso del tempo, il parco è stato ridisegnato secondo diversi modelli, tra cui la trasformazione del Tiergarten in un parco pubblico inglese a metà del XIX secolo. L'ultimo anno della Seconda Guerra Mondiale, in particolare, fu catastrofico per il parco. Dopo la guerra, il parco fu quasi completamente spogliato dai berlinesi in cerca di legna da ardere. Il rimboschimento del parco iniziò nel 1949 e all'epoca poteva essere realizzato quasi solo con donazioni di alberi da altre città tedesche.",
      lat: 52.516507,
      lon: 13.350493,
      url: "https://pixabay.com/de/photos/tiergarten-berlino-2879701/",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Colonna della Vittoria",
      short: "Monumento commemorativo delle guerre di unificazione, spostato nel 1939.",
      info: "La Colonna della Vittoria sul Großer Stern, nel Großer Tiergarten, è uno dei monumenti nazionali più importanti della Germania e una delle attrazioni più importanti di Berlino. Costruita tra il 1864 e il 1873 per commemorare le guerre di unificazione, fu spostata nella sua posizione attuale nel 1939. Originariamente si trovava di fronte al Reichstag.",
      lat: 52.514471,
      lon: 13.350422,
      url: "https://pixabay.com/de/photos/vittoria-berlino-1869254/",
      img: "colonna_vittoria",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  nl: [
    {
      name: "1. Tv-toren (Fernsehturm)",
      short: "De Berlijnse TV-toren is het hoogste gebouw van Duitsland en een iconisch symbool van de DDR.",
      info: "De televisietoren is een van de beroemdste gebouwen in Berlijn en is typerend voor de architectuur van de Duitse Democratische Republiek (DDR), dat wil zeggen Oost-Duitsland, het communistische Duitsland. De Berlijnse TV-toren (368 meter) is het hoogste gebouw van Duitsland en werd in 1969 voltooid in de DDR. In die tijd, halverwege de jaren zestig, was de concurrentie tussen Oost en West in volle gang. Alles moest hoger, sneller en verder zijn. De Oostbloklanden waren in opkomst na de succesvolle vlucht van de Spoetnik en de DDR wilde de nieuwste sensatie creëren met de televisietoren." +
        "Het ambitieuze project had twee doelen: een symbool van macht en technisch voordeel ten opzichte van het Westen, en het verbeteren van de omroepinfrastructuur om de staatstelevisie te helpen verspreiden. Desondanks behield de DDR-televisie een slecht imago onder de bevolking. In Berlijn en langs de Duitse binnengrens zetten veel Oost-Duitsers 's avonds stiekem Westerse televisie aan." +
        "Na 1989 ontdekten sociologen tot hun verbazing dat de mentale verschillen tussen de West- en Oost-Duitse samenleving veel kleiner waren dan verwacht. De verspreiding van de Westerse televisie in de DDR heeft hier waarschijnlijk een rol in gespeeld.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. Het Rode Stadhuis (Rotes Rathaus)",
      short: "Het Rode Stadhuis is de zetel van de burgemeester en een herkenningspunt van Berlijn.",
      info: "Dit is de zetel van de burgemeester en de senaat van Berlijn. Het opvallende gebouw is ook een bekend herkenningspunt van de stad. Het gebouw in de buurt van Alexanderplatz dankt zijn naam aan zijn gevel met felrode bakstenen. Het werd gebouwd in neorenaissancestijl tussen 1861-1869. Eeuwenlang werden rode bakstenen vaak gebruikt voor de bouw van kerken en belangrijke gebouwen vanwege het gebrek aan grote steenmijnen in de regio.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Mariakerk (Marienkirche)",
      short: "De Mariakerk is een van de oudste kerken in Berlijn met een bijzondere middeleeuwse muurschildering.",
      info: "De kerk was oorspronkelijk een rooms-katholieke kerk, maar werd sinds de reformatie in 1539 een lutherse protestantse kerk. Buiten de kerk vindt ook een standbeeld van Maarten Luther, de grondlegger van de Reformatie. Samen met de St. Nicolaaskerk is de Mariakerk de oudste kerk van Berlijn. Bijzonder bezienswaardig in de kerk is de muurschildering van de dodendans uit de middeleeuwen. De afbeeldingen van de dodendans verschenen in Europa tijdens de pestepidemie. De muurschildering geeft aan dat de dood plotseling en onverwacht komt. In deze geschilderde theologie uit de Middeleeuwen is de dans met de dood gericht op het leven: de manier van leven onderzoeken, het onvermijdelijke accepteren en tegelijkertijd verder kijken dan de grenzen van het leven hier en nu.",
      lat: 52.51579,
      lon: 13.40433,
      url: "https://pixabay.com/nl/photos/marienkirche-berlin-kerken-1612296/",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Berlijnse Dom (Berliner Dom)",
      short: "De Berliner Dom is de grootste protestantse kerk van Duitsland met een indrukwekkende geschiedenis.",
      info: "De geschiedenis van de Berliner Dom begint in 1465 met de bouw van een kleine kerk op het Spree-eiland. In 1747, tijdens het bewind van Frederik de Grote, werd de kerk herbouwd in barokstijl met een koepel ontworpen door Johann Boumann de Oude. Ongeveer 70 jaar later renoveerde Karl Friedrich Schinkel de kerk in classicistische stijl. Na verloop van tijd waren er verschillende kleine renovaties. In 1894 besloot keizer Wilhelm II dat de kathedraal grootser moest worden. Hij keurde een ontwerp van Julius Carl Raschdorff goed, waarvoor de oude kathedraal moest worden afgebroken. De nieuwe kathedraal, gebouwd tussen 1894 en 1905, was bedoeld om te wedijveren met de Sint-Pietersbasiliek in Rome. Deze nieuwe Berliner Dom werd de belangrijkste kerk voor de Hohenzollern dynastie onder keizer Wilhelm II. Tegenwoordig is de Berliner Dom de grootste protestantse kerk in Duitsland.",
      lat: 52.51806,
      lon: 13.40157,
      url: "https://cdn.pixabay.com/photo/2019/01/11/12/28/berlin-cathedral-3921218_1280.jpg",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Straat Unter den Linden",
      short: "Unter den Linden is een historische boulevard in Berlijn met een rijke geschiedenis.",
      info: "Je staat op het punt om de straat “Unter den Linden” in te gaan, wat “Onder de Lindenbomen” betekent. Deze straat werd in de 16e eeuw aangelegd en beplant met lindebomen. Ze leidde van het Berlijnse stadspaleis (nu “Humboldt Forum”) naar de Tiergarten, een groot park achter de Brandenburger Tor. Het was gepland voor heerser Johann Georg als een ruiter- en jachtpad dat van zijn paleis naar de Tiergarten leidde. In de 18e eeuw veranderde Frederik de Grote, die van 1740 tot 1786 over Pruisen regeerde, de straat in een prachtige laan. Je vindt zijn grote standbeeld (hij zittend op een paard) iets verderop, midden in de straat. Frederik de Grote was een zeer tegenstrijdige persoonlijkheid. Aan de ene kant volgde hij de filosofie van de verlichting en waardeerde hij onderwijs en cultuur. Hij stichtte scholen, steunde de kunsten en nodigde beroemde denkers als Voltaire uit aan zijn hof. Hij bevorderde ook religieuze tolerantie, stond mensen met verschillende geloofsovertuigingen toe hun godsdienst vrij te belijden en schafte marteling af. Aan de andere kant bevorderde hij de militarisering van Pruisen, voerde hij drie oorlogen om Silezië en sloot hij zich aan bij de grote Europese machten van die tijd (naast Frankrijk, Groot-Brittannië, Oostenrijk en Rusland) door zijn betrokkenheid bij de Zevenjarige Oorlog van 1756-1763. Samen met Oostenrijk en Rusland gaf hij zonder scrupules de aanzet tot de opdeling en vernietiging van Polen.",
      lat: 52.515,
      lon: 13.405,
      url: "https://pixabay.com/nl/photos/berlijn-unter-den-linden-2357275/",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Het Berlijnse Paleis / tegenwoordig Humboldt Forum",
      short: "Het Humboldt Forum herbouwt het voormalige Berlijnse Paleis als een cultureel centrum.",
      info: "Het paleis van Berlijn was de hoofdresidentie van de Pruisische koningen. Tijdens de Tweede Wereldoorlog werd het paleis in Berlijn zwaar beschadigd door geallieerde bombardementen. Na de oorlog stond het paleis in Oost-Berlijn. De Oost-Duitse regering besloot het verwoeste paleis in 1950 te slopen, omdat ze het als een symbool van de keizerlijke en Pruisische macht beschouwde. In plaats daarvan bouwde de Oost-Duitse regering het Palast der Republik (Paleis van de Republiek), dat dienst deed als parlement van de DDR en als cultureel centrum. Dit gebouw werd later gesloten en gesloopt vanwege het asbest waarmee het was gebouwd. Na de hereniging van Duitsland werd besloten om het Paleis van Berlijn te herbouwen. De wederopbouw begon in 2013, waarbij oude foto's en plannen werden gebruikt om het historische uiterlijk te recreëren. Het herbouwde paleis, dat in 2020 klaar was, staat nu bekend als het Humboldt Forum. Het doet dienst als museum en cultureel centrum, waar kunst en interactieve tentoonstellingen uit de hele wereld worden getoond.",
      lat: 52.521,
      lon: 13.401,
      url: "https://cdn.pixabay.com/photo/2019/02/01/11/13/berlin-3968907_1280.jpg",
      img: "humboldt_forum",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. Het Duits Historisch Museum (Das Deutsche Historische Museum)",
      short: "Het Duits Historisch Museum herbergt een uitgebreide collectie over de Duitse geschiedenis.",
      info: "Het gebouw van het Historisch Museum is het oudste gebouw aan de straat Unter den Linden. Het werd oorspronkelijk gebouwd als wapenarsenaal in het begin van de 18e eeuw. Later, in de 19e eeuw, werd het het Koninklijk Pruisisch Legermuseum. In de 20e eeuw werd het door de nazi's gebruikt voor tentoonstellingen die de ideologie en doelen van de nationaalsocialisten ondersteunden. Na de Tweede Wereldoorlog werd het door de Oost-Duitse regering gebruikt als het centrale museum voor socialistische geschiedenis in de DDR. Met de Duitse hereniging in 1990 nam het Duits Historisch Museum, dat drie jaar eerder in West-Berlijn was opgericht, het gebouw en de collecties over.",
      lat: 52.516,
      lon: 13.388,
      url: "https://cdn.pixabay.com/photo/2017/09/02/20/38/berlin-2709738_1280.jpg",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Neue Wache",
      short: "Nieuwe Wache herdenkt slachtoffers van oorlog en tirannie met een 'eeuwige vlam'.",
      info: "“Neue Wache” aan Unter den Linden is het centrale gedenkteken in Duitsland voor de slachtoffers van oorlog en tirannie. Dit relatief kleine gebouw ligt direct naast de wapenkamer, waar nu het Duits Historisch Museum is gevestigd. Het werd tussen 1816 en 1818 gebouwd naar een ontwerp van Karl Friedrich Schinkel en werd in 1993 het centrale gedenkteken in de Bondsrepubliek Duitsland voor de slachtoffers van oorlog en tirannie. Binnen brandt een “eeuwige vlam” boven urnen met de stoffelijke resten van een onbekende concentratiekampgevangene en een onbekende soldaat. Het beeld “Moeder met dode zoon” (“Pieta”) van Käthe Kollwitz staat er sinds 1993.",
      lat: 52.516,
      lon: 13.388,
      url: "https://cdn.pixabay.com/photo/2016/09/25/00/30/berlin-1698857_1280.jpg",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Berlijnse Staatsopera",
      short: "De Berlijnse Staatsopera is een historisch operagebouw geopend in 1742.",
      info: "De Berlijnse Staatsopera is een van de oudste operagebouwen van Duitsland en werd geopend in 1742. De Berlijnse Staatsopera werd opgericht door de heerser Frederik de Grote van Pruisen. Het was bedoeld als een centrum voor opera en ballet.",
      lat: 52.516,
      lon: 13.387,
      url: "https://cdn.pixabay.com/photo/2020/04/12/16/24/theater-5030827_1280.jpg",
      img: "staatsoper",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Humboldt-Universiteit",
      short: "De Humboldt-Universiteit is een van de oudste en meest prestigieuze universiteiten in Berlijn.",
      info: "De Universiteit van Berlijn (tegenwoordig: Humboldt-Universität zu Berlin) werd in 1809 opgericht door de Pruisische koning Friedrich Wilhelm III en begon in 1810 met lesgeven. In 1949 werd de grootste en oudste universiteit van Berlijn vernoemd naar de universele geleerden Wilhelm en Alexander von Humboldt. De universiteit is gevestigd in het voormalige paleis van prins Heinrich (de broer van Frederik de Grote).",
      lat: 52.518,
      lon: 13.388,
      url: "https://cdn.pixabay.com/photo/2015/03/26/09/54/berlin-690697_1280.jpg",
      img: "humboldt_universität",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "Bebelplatz herdenkt de boekverbranding door de nazi's met een indrukwekkend gedenkteken.",
      info: "Je staat voor de rechtenfaculteit van de Humboldt Universiteit op de Bebelplatz. Op de grond vind je een gedenkteken van Micha Ullman gewijd aan de boekverbranding op 10 mei 1933, op de plaats waar de nazi's een verschrikkelijk ritueel uitvoerden in het midden van de stad. In het midden van de Bebelplatz gaat de vloer open. Voorbijgangers kunnen door een ruit kijken in een witte, lege kamer met planken waar ooit boeken stonden. Het naziregime verbrandde boeken om universiteiten te indoctrineren met hun ideologie. Slechts drie maanden nadat Hitler aan de macht was gekomen, waren de branden bedoeld om te laten zien dat de “Nationaal-Socialistische Revolutie” schrijvers en schrijvers niet zou sparen. Nazi-auteur Hanns Johst zei later dat de revolutie ook niet zou stoppen bij de bureaus van schrijvers. Eerder had de Duitse Studentenbond universiteiten opgeroepen om in actie te komen tegen de “Joodse geest van subversie”. Er werden lijsten met verboden boeken gepubliceerd, bijv. boeken van Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud etc. werden als “immoreel” en “decadent” bestempeld.",
      lat: 52.516,
      lon: 13.384,
      url: "https://cdn.pixabay.com/photo/2015/03/26/09/54/berlin-690697_1280.jpg",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstraße",
      short: "Friedrichstraße is een beroemde straat in Berlijn met een rijke geschiedenis.",
      info: "De Friedrichstraße is een van de bekendste straten in het historische centrum van Berlijn en is vernoemd naar de keurvorst Frederik III van Brandenburg, die in 1701 de eerste Pruisische koning werd, Frederik I, “Koning in Pruisen”. Aan het begin van de 20e eeuw groeide het kruispunt met de boulevard Unter den Linden uit tot een van de drukste van de stad. Talloze paardenkoetsen, taxi's, motorvoertuigen, handkarren, bussen, fietsers en voetgangers deelden de straat.",
      lat: 52.521,
      lon: 13.388,
      url: "https://cdn.pixabay.com/photo/2018/01/08/15/20/berlin-3062955_1280.jpg",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "Hotel Adlon is een luxe hotel dat de traditie van het oorspronkelijke Adlon voortzet.",
      info: "Hotel Adlon Kempinski is een van de meest luxueuze en bekendste hotels in Duitsland. Het werd heropend in 1997 en volgt de traditie van het oorspronkelijke Hotel Adlon, dat werd geopend in 1907 en zwaar werd verwoest in 1945.",
      lat: 52.519,
      lon: 13.390,
      url: "https://cdn.pixabay.com/photo/2021/07/01/16/10/hotel-6386097_1280.jpg",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. De Brandenburger Tor",
      short: "De Brandenburger Tor is een iconische poort en symbool van Berlijn.",
      info: "De Brandenburger Tor werd gebouwd tussen 1788 en 1791. Het werd gebouwd in opdracht van koning Frederik Willem II van Pruisen en ontworpen door architect Carl Gotthard Langhans. De poort is gebouwd in de klassieke stijl en is 26 meter hoog. Ze werd oorspronkelijk gebouwd als symbool van vrede. De Quadriga, een strijdwagen getrokken door vier paarden, wordt bestuurd door Eirene, de godin van de vrede. Toen Napoleon in 1806 Berlijn veroverde, nam hij de Quadriga en het beeld bovenop de poort mee naar Parijs. Nadat Napoleon in 1814 was verslagen, werd de Quadriga teruggebracht naar Berlijn en weer op de poort geplaatst. Na de Tweede Wereldoorlog en de deling van Berlijn stond de Brandenburger Tor vlak naast de Berlijnse Muur en werd het een symbool van de deling van Duitsland. Toen de Berlijnse Muur in 1989 viel, werd de poort een symbool van de hereniging van Duitsland. De gebouwen ten westen van de Brandenburger Tor maken geen deel meer uit van het historische deel van Berlijn, d.w.z. het Berlijn van voor 1750. De voormalige door de Amerikanen gecontroleerde sector van Berlijn (1945-1990) begint bij de Brandenburger Tor.",
      lat: 52.516,
      lon: 13.377,
      url: "https://cdn.pixabay.com/photo/2016/09/22/08/25/berlin-1680862_1280.jpg",
      img: "brandenburger_tor",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Monument voor de vermoorde Joden in Europa",
      short: "Het monument herdenkt de zes miljoen Joden die tijdens de Holocaust zijn vermoord.",
      info: "Het Monument voor de Vermoorde Joden van Europa in het historische centrum van Berlijn herdenkt de ongeveer zes miljoen Joden die werden vermoord onder het bewind van Adolf Hitler en de nationaal-socialisten. Het monument is ontworpen door Peter Eisenman en bestaat uit 2711 kubusvormige betonnen stèles met een totale oppervlakte van 19.000 vierkante meter. Het is open voor het publiek sinds 12 mei 2005 en is bedoeld om politici en mensen in het centrum van de stad te herinneren aan de misdaden van nationaalsocialistisch Duitsland, zodat ze nooit meer worden herhaald.",
      lat: 52.513,
      lon: 13.381,
      url: "https://cdn.pixabay.com/photo/2017/11/07/09/27/berlin-2928964_1280.jpg",
      img: "monument_vermoorde_joden",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (Duits parlement)",
      short: "Het Reichstaggebouw is een historisch parlementspand in Berlijn.",
      info: "Het Rijksdaggebouw werd gebouwd van 1884 tot 1894. Met het uitroepen van het Duitse Rijk in 1871 werd Berlijn de keizerlijke hoofdstad. Het nieuw gevormde parlement had nu een zetel nodig. Het Rijksdaggebouw is sinds 1990 de zetel van de Duitse Bondsdag. Belangrijke keerpunten en gebeurtenissen in de Duitse geschiedenis worden in verband gebracht met het Rijksdaggebouw. Op 9 november 1918 riep SPD-politicus Philipp Scheidemann de Republiek uit vanaf het balkon bij het westportaal. Op de avond van 27 februari 1933 vond de “Rijksdagbrand” plaats. De plenaire zaal en de koepel werden volledig verwoest. Een rode vlag van de Sovjet-Unie, gehesen door twee soldaten van het Rode Leger op 30 april 1945, symboliseerde de overwinning op het “Derde Rijk”.",
      lat: 52.518,
      lon: 13.373,
      url: "https://cdn.pixabay.com/photo/2016/09/15/11/17/reichstag-1675232_1280.jpg",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "De Tiergarten is het grootste park van Berlijn en het groene hart van de stad.",
      info: "De Tiergarten is het groene hart van Berlijn. De Tiergarten heeft al verschillende transformaties ondergaan. Aan het einde van de 17e eeuw liet keurvorst Friedrich III het voormalige jachtgebied veranderen in een “plezierpark voor de bevolking”. In de loop der tijd werd het park heringericht volgens verschillende modellen, waaronder de transformatie van de Tiergarten in een Engels openbaar park in het midden van de 19e eeuw. Vooral het laatste jaar van de Tweede Wereldoorlog was rampzalig voor het park. Na de oorlog werd het park bijna volledig kaalgehaald door Berlijners op zoek naar brandhout. De herbebossing van het park begon in 1949 en kon toen bijna alleen worden uitgevoerd met boomdonaties van andere Duitse steden.",
      lat: 52.514,
      lon: 13.350,
      url: "https://cdn.pixabay.com/photo/2018/03/23/12/24/tiergarten-3254288_1280.jpg",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Overwinningszuil",
      short: "De Overwinningszuil herdenkt de eenwordingsoorlogen en de Duitse eenheid.",
      info: "De Overwinningszuil op de Großer Stern in de Großer Tiergarten is een van de belangrijkste nationale monumenten van Duitsland en een van de belangrijkste bezienswaardigheden van Berlijn. Hij werd gebouwd tussen 1864 en 1873 om de eenwordingsoorlogen te herdenken en werd in 1939 verplaatst naar zijn huidige locatie. Het stond oorspronkelijk voor de Reichstag.",
      lat: 52.516,
      lon: 13.351,
      url: "https://cdn.pixabay.com/photo/2016/09/10/21/59/victory-column-1651854_1280.jpg",
      img: "overwinningszuil",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  hu: [
    {
      name: "1. TV-torony (Fernsehturm)",
      short: "A TV-torony Berlin egyik leghíresebb épülete.",
      info: "A TV-torony Berlin egyik leghíresebb épülete, amely a Német Demokratikus Köztársaság (NDK), azaz Kelet-Németország, a kommunista Németország építészetére jellemző. A berlini TV-torony (368 méter) Németország legmagasabb épülete, 1969-ben készült el az NDK-ban. Akkoriban, a hatvanas évek közepén a Kelet és a Nyugat közötti versengés javában zajlott. Mindennek magasabbnak, gyorsabbnak és messzebbre kellett lennie. A keleti blokk országai a sikeres Szputnyik-repülés után felemelkedőben voltak, az NDK pedig a következő szenzációt akarta megteremteni a tévétoronnyal. Az ambiciózus projektnek két célja volt: egyrészt a hatalom és a technikai előny jelképét akarták a magasba emelni a Nyugattal szemben, másrészt a műsorszórási infrastruktúrát akarták javítani, hogy segítsék az állami televíziózás elterjedését. Ennek ellenére az NDK televíziójának rossz megítélése megmaradt a lakosság körében. Berlinben és az egész belső német határ mentén sok keletnémet titokban bekapcsolta esténként a nyugati televíziót. 1989 után a szociológusok meglepődve tapasztalták, hogy a nyugat- és keletnémet társadalom mentálisan sokkal kevésbé különbözött egymástól, mint várták. Ebben valószínűleg szerepet játszott a nyugati televíziózás elterjedése az NDK-ban.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. A vörös városháza (Rotes Rathaus)",
      short: "Berlin kormányzó polgármesterének és szenátusának székhelye.",
      info: "Berlin kormányzó polgármesterének és szenátusának székhelye. A feltűnő épület egyben a város ismert nevezetessége is. Az Alexanderplatz közelében álló épület nevét élénkvörös téglákkal kirakott homlokzatáról kapta. Neoreneszánsz stílusban épült 1861-1869 között. Évszázadokon át gyakran használtak vörös téglát templomok és fontos épületek építéséhez, mivel a régióban nem voltak nagy kőbányák.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Szent Mária-templom (Marienkirche)",
      short: "Berlin legrégebbi temploma.",
      info: "A templom eredetileg római katolikus templom volt, de az 1539-es reformáció óta lutheránus protestáns templom lett. A templom előtt a reformáció megalapítójának, Luther Mártonnak a szobra is megtalálható. A Szent Miklós-templom mellett a Mária-templom Berlin legrégebbi temploma. A templom belsejében különösen érdemes megnézni a középkori Haláltáncot ábrázoló freskót. A haláltánc ábrázolásai a pestisjárvány idején jelentek meg Európában. A freskó azt jelzi, hogy a halál hirtelen és váratlanul jön. A középkor e festett teológiájában a haláltánc az életre irányul: az életút vizsgálatára, az elkerülhetetlen elfogadására, ugyanakkor az itt és mostani élet határain túlra tekintve.",
      lat: 52.521918,
      lon: 13.413215,
      url: "https://cdn.pixabay.com/photo/2015/05/15/14/53/marienkirche-765284_1280.jpg",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Berlini székesegyház (Berliner Dom)",
      short: "Németország legnagyobb protestáns temploma.",
      info: "A berlini dóm története 1465-ben kezdődik, amikor egy kis templom építése kezdődött a Spree-szigeten. A templomot 1747-ben, Nagy Frigyes uralkodása idején barokk stílusban építették át, az idősebb Johann Boumann által tervezett kupolával. Körülbelül 70 évvel később Karl Friedrich Schinkel klasszicista stílusban újította fel a templomot. Idővel több kisebb felújítás is történt. Aztán 1894-ben II. Vilmos császár úgy döntött, hogy a székesegyháznak nagyobbra kell nőnie. Jóváhagyta Julius Carl Raschdorff tervét, amihez a régi székesegyházat le kellett bontani. Az 1894 és 1905 között épült új székesegyház a római Szent Péter-bazilikával vetekedőnek készült. Ez az új berlini székesegyház lett a Hohenzollern-dinasztia fő temploma II. Napjainkban a berlini dóm Németország legnagyobb protestáns temploma.",
      lat: 52.519444,
      lon: 13.401667,
      url: "https://cdn.pixabay.com/photo/2014/08/09/15/16/berliner-dom-412120_1280.jpg",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Unter den Linden utca",
      short: "Berlin híres sugárútja.",
      info: "Az „Unter den Linden” utcába lép be, ami azt jelenti, hogy „a hársfák alatt”. Ezt az utcát a 16. században hársfákkal ültették be. A berlini Városi Palotától (ma „Humboldt Forum”) a Tiergartenbe, a Brandenburgi kapu mögötti nagy parkba vezetett. Johann Georg uralkodó számára tervezték, mint a palotájából a Tiergartenbe vezető lovas- és vadászútat. A 18. században Nagy Frigyes, aki 1740-től 1786-ig uralkodott Poroszországban, pompás sugárúttá alakította az utcát. Az ő nagy szobrát (lóháton ülve) egy kicsit odébb, az utca közepén találja. Nagy Frigyes nagyon ellentmondásos személyiség volt. Egyrészt a felvilágosodás filozófiáját követte, és nagyra értékelte az oktatást és a kultúrát. Iskolákat alapított, támogatta a művészeteket, és olyan híres gondolkodókat hívott meg az udvarába, mint Voltaire. Emellett támogatta a vallási toleranciát, megengedte a különböző vallású embereknek, hogy szabadon gyakorolják vallásukat. Ugyanakkor hadserege alatt rengeteg háborút indított. Érdekes, hogy az utca végén álló Brandenburgi kapu, amely a 18. század végén épült, éppen Nagy Frigyes utazásai előtt készült el, és ő soha nem látta a kaput. Ugyanakkor, a kapu, amely azóta Berlin szimbóluma lett, egy fontos történelmi pillanatra is utal: a két Németország újraegyesítésére.",
      lat: 52.516666,
      lon: 13.388889,
      url: "https://cdn.pixabay.com/photo/2018/02/08/12/21/berlin-3137060_1280.jpg",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Humboldt Fórum",
      short: "A kulturális és tudományos központ Berlin szívében.",
      info: "A Humboldt Fórum Berlin szívében található, a híres Spree-szigeten. A 2018-ban megnyílt épület az egykori Berlini Palota helyén épült fel, amely a második világháború alatt és az azt követő évtizedekben jelentős károkat szenvedett. Az épület története szorosan összefonódik a német történelemmel: a Berlini Palota, amely a Hohenzollern-dinasztia székhelye volt, az 1950-es években lebontásra került, és a helyén több mint hat évtizeddel később kezdődött új építkezés. A Humboldt Fórum a kulturális és tudományos élet központja, amely a világ különböző kultúráinak bemutatására szolgál. Az épület többek között a Berlin Múzeum, az Ethnologisches Museum (Németország legnagyobb néprajzi gyűjteménye) és a Kunstkammer (Művészeti Kamra) otthona. Az épület megépítésekor nagy figyelmet fordítottak arra, hogy a történelemhez hűen újjáépítsék az eredeti barokk homlokzatot, miközben a modern építészeti elemeket is beépítették.",
      lat: 52.520833,
      lon: 13.409444,
      url: "https://cdn.pixabay.com/photo/2020/02/23/12/51/humboldt-forum-4874602_1280.jpg",
      img: "humboldt_forum",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. A Német Történeti Múzeum („Das Deutsche Historische Museum”)",
      short: "",
      info: "A Történeti Múzeum épülete az Unter den Linden utca legrégebbi épülete. Eredetileg fegyverarzenálnak épült a 18. század elején. Később, a 19. században a porosz királyi hadsereg múzeuma lett. A 20. században a nácik használták a nemzetiszocialisták ideológiáját és céljait támogató kiállításokra. A második világháború után a keletnémet kormány az NDK szocialista történelem központi múzeumaként használta. A német újraegyesítéssel 1990-ben a három évvel korábban Nyugat-Berlinben alapított Német Történeti Múzeum vette át az épületet és gyűjteményeit.",
      lat: 52.518889,
      lon: 13.397733,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Deutsches_Historisches_Museum.JPG/1024px-Deutsches_Historisches_Museum.JPG",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Az új gárda („Neue Wache”)",
      short: "",
      info: "Az Unter den Lindenen található „Neue Wache” a háború és a zsarnokság áldozatainak központi németországi emlékhelye. Ez a viszonylag kis épület közvetlenül a fegyverraktár mellett található, amely ma a Német Történeti Múzeumnak ad otthont. Az 1816 és 1818 között Karl Friedrich Schinkel tervei alapján épült, és 1993-ban vált a Német Szövetségi Köztársaságban a háború és a zsarnokság áldozatainak központi emlékművévé. Belsejében egy „örök láng” ég egy ismeretlen koncentrációs táborban raboskodó és egy ismeretlen katona maradványait tartalmazó urnák felett. Az „Anya halott fiával” („Pieta”) című Käthe Kollwitz-szobor 1993 óta áll benne.",
      lat: 52.518555,
      lon: 13.397676,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Neue_Wache.jpg/1024px-Neue_Wache.jpg",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Berlini Állami Operaház",
      short: "",
      info: "A Berlini Állami Opera Németország egyik legrégebbi operaháza, amelyet 1742-ben nyitottak meg. A Berlini Állami Operaházat Nagy Frigyes porosz uralkodó alapította. Az opera és a balett központjának szánták.",
      lat: 52.516389,
      lon: 13.385556,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Staatsoper_Berlin_%28Schinkel%29.jpg/1024px-Staatsoper_Berlin_%28Schinkel%29.jpg",
      img: "staatsoper_berlin",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Humboldt Egyetem",
      short: "",
      info: "A berlini egyetemet (ma: Humboldt-Universität zu Berlin) 1809-ben alapította III. Friedrich Wilhelm porosz király, és 1810-ben kezdte meg az oktatást. A legnagyobb és legrégebbi berlini egyetemet 1949-ben Wilhelm és Alexander von Humboldt egyetemes tudósokról nevezték el. Székhelye Heinrich herceg (Nagy Frigyes testvére) egykori palotájában található.",
      lat: 52.518611,
      lon: 13.388056,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Humboldt-Universit%C3%A4t_zur_Berlin_01.jpg/1024px-Humboldt-Universit%C3%A4t_zur_Berlin_01.jpg",
      img: "humboldt_universitaet",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "",
      info: "A Humboldt Egyetem jogi kara előtt állsz a Bebelplatzon. A földön Micha Ullman emlékművét találod , amelyet az 1933. május 10-i könyvégetésnek szenteltek, azon a helyen, ahol a nácik a város közepén szörnyű rituálét hajtottak végre. A Bebelplatz közepén megnyílik a padló. A járókelők egy üvegtáblán keresztül egy fehér, üres helyiségbe nézhetnek, amelynek polcain egykor könyvek voltak. A náci rezsim könyveket égetett el, hogy ideológiájukkal beavassák az egyetemeket. Alig három hónappal Hitler hatalomra kerülése után a tüzekkel azt akarták megmutatni, hogy a „nemzetiszocialista forradalom” nem kíméli az írókat és a szerzőket. Hanns Johst náci író később azt mondta, hogy a forradalom az íróasztalok előtt sem fog megállni. A Német Diákszövetség már korábban felszólította az egyetemeket, hogy mozgósítsanak a „zsidó felforgató szellem” ellen. Kiadták a betiltott könyvek listáit, pl.: Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud stb. könyveit „erkölcstelennek” és „dekadensnek” bélyegezték.",
      lat: 52.516114,
      lon: 13.387328,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bebelplatz.jpg/1024px-Bebelplatz.jpg",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstrasse",
      short: "",
      info: "A Friedrichstraße Berlin történelmi belvárosának egyik leghíresebb utcája, amelyet III. brandenburgi választófejedelemről, Friedrich III-ról neveztek el, aki 1701-ben lett az első porosz király, I. Friedrich, „király Poroszországban”. A 20. század elején az Unter den Linden körúttal való kereszteződése a város egyik legforgalmasabb utcájává fejlődött. Számtalan lovaskocsi, taxi, motoros jármű, kézikocsi, busz, kerékpáros és gyalogos osztozott az utcán.",
      lat: 52.517778,
      lon: 13.387222,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Friedrichstra%C3%9Fe_Berlin_1910.jpg/1024px-Friedrichstra%C3%9Fe_Berlin_1910.jpg",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "",
      info: "A Hotel Adlon Kempinski Németország egyik legfényűzőbb és legismertebb szállodája. A szállodát 1997-ben nyitották meg újra, és az 1907-ben megnyitott, 1945-ben súlyosan elpusztult eredeti Hotel Adlon hagyományait követi.",
      lat: 52.516444,
      lon: 13.388077,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hotel_Adlon_2011.jpg/1024px-Hotel_Adlon_2011.jpg",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. Brandenburgi kapu (Brandenburger Tor)",
      short: "Berlin legismertebb szimbóluma.",
      info: "A Brandenburgi kapu Berlin legismertebb szimbóluma, amelyet 1789 és 1791 között építettek. A kapu a Nyugati Pálma zölden tartó diadémját bemutató neoklasszicista stílusban épült. A kapu a Brandenburgi hercegség egykori határát jelentette. A Brandenburgi kapu története is szorosan összefonódik a berlini fal történetével. Az 1961-es évig a kapu az egyik pont volt, ahol a Berlini fal osztotta a várost Kelet- és Nyugat-Berlinre. Az 1989-es német újraegyesítés után a kapu a két Németország újraegyesítésének jelképévé vált. A kaput gyakran látogatják a turisták és az emberek, akik megünneplik a különböző ünnepeket és eseményeket.",
      lat: 52.516275,
      lon: 13.377705,
      url: "https://cdn.pixabay.com/photo/2016/02/23/21/19/brandenburg-gate-1210786_1280.jpg",
      img: "brandenburger_tor",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Holocaust-emlékmű (Denkmal für die ermordeten Juden Europas)",
      short: "Emlékhely a holokauszt áldozatai számára.",
      info: "A Holocaust-emlékmű, hivatalos nevén „Denkmal für die ermordeten Juden Europas”, Berlin szívében található. Ezt a monumentális emlékhelyet Peter Eisenman amerikai építész tervezte, és 2005-ben avatták fel. Az emlékhely célja, hogy emlékeztessen a holokauszt áldozataira. Az emlékhelyet 2711 betonoszlop alkotja, amelyek a különböző magasságokban elrendezve sorakoznak. Az oszlopok között sétálva az ember egyfajta disorientált érzést tapasztalhat, amely a múltbeli tragédiákra és az emberek emlékére utal. Az emlékhely szándékosan nem tartalmaz konkrét neveket vagy adatokat az áldozatokra vonatkozóan, hogy a figyelem az emlékezésre és a tiszteletadásra összpontosítson.",
      lat: 52.513782,
      lon: 13.390804,
      url: "https://cdn.pixabay.com/photo/2018/04/23/14/54/memorial-3342967_1280.jpg",
      img: "holocaust_memorial",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (német parlament)",
      short: "",
      info: "A Reichstag épülete 1884 és 1894 között épült. A Német Birodalom 1871-es kikiáltásával Berlin lett a birodalom fővárosa. Az újonnan alakult parlamentnek most már szüksége volt egy székhelyre. A Reichstag épülete 1990 óta a német Bundestag székhelye. A német történelem jelentős fordulópontjai és eseményei a Reichstag épületéhez kötődnek. 1918. november 9-én Philipp Scheidemann SPD-politikus a nyugati portálon lévő erkélyről kikiáltotta a köztársaságot. 1933. február 27-én este történt a „Reichstag-tűz”. A plenáris terem és a kupola teljesen megsemmisült. A Szovjetunió vörös zászlaja, amelyet 1945. április 30-án a Vörös Hadsereg két katonája tűzött ki, a „Harmadik Birodalom” feletti győzelmet jelképezte.",
      lat: 52.518611,
      lon: 13.376111,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Reichstag_berlin.jpg/1024px-Reichstag_berlin.jpg",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "",
      info: "A Tiergarten Berlin zöld szíve. A Tiergarten már több átalakuláson is átesett. A 17. század végén III. Friedrich választófejedelem az egykori vadászterületet „a lakosság számára kialakított örömparkká” alakíttatta át. Az idők folyamán a parkot többféle minta szerint alakították át, többek között a 19. század közepén a Tiergarten angol közparkká alakult át. Különösen a második világháború utolsó éve volt katasztrofális a park számára. A háború után a parkot a tűzifát kereső berliniek szinte teljesen lecsupaszították. A park újraerdősítése 1949-ben kezdődött, és akkoriban szinte csak más német városokból származó faadományokból lehetett megvalósítani.",
      lat: 52.515833,
      lon: 13.361111,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tiergarten_Berlin.jpg/1024px-Tiergarten_Berlin.jpg",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Győzelem oszlop",
      short: "",
      info: "A Großer Tiergartenben a Großer Sternen álló Győzelmi oszlop Németország egyik legfontosabb nemzeti emlékműve és Berlin egyik legfontosabb látnivalója. Az 1864 és 1873 között épült az egyesülési háborúk emlékére, és 1939-ben került a jelenlegi helyére. Eredetileg a Reichstag előtt állt.",
      lat: 52.514444,
      lon: 13.350833,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Siegess%C3%A4ule_Berlin.jpg/1024px-Siegess%C3%A4ule_Berlin.jpg",
      img: "siegessaeule",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  es: [
    {
      name: "1. Torre de televisión («Fernsehturm»)",
      short: "",
      info: "La Torre de TV es uno de los edificios más famosos de Berlín y es típico de la arquitectura de la República Democrática Alemana (RDA), es decir, de la Alemania del Este, la Alemania comunista. La Torre de Telecomunicaciones de Berlín (368 metros) es el edificio más alto de Alemania, terminado en 1969 en la RDA. Por aquel entonces, a mediados de los sesenta, la competencia entre el Este y el Oeste estaba en pleno apogeo. Todo tenía que ser más alto, más rápido y más lejos. Los países del Bloque del Este estaban en alza tras el éxito del vuelo del Sputnik, y la RDA pretendía crear la siguiente sensación con la torre de televisión." +
      "El ambicioso proyecto tenía dos objetivos: mantener en alto un símbolo de poder y ventaja técnica sobre Occidente, y mejorar la infraestructura de radiodifusión para ayudar a difundir la televisión estatal. Sin embargo, la televisión de la RDA conservaba una mala imagen entre la población. En Berlín y a lo largo de la frontera interior, muchos alemanes orientales encendían en secreto la televisión occidental por las tardes." +
      "Después de 1989, los sociólogos se sorprendieron al comprobar que la sociedad alemana occidental y oriental habían divergido mentalmente mucho menos de lo esperado. Es probable que la difusión de la televisión occidental en la RDA haya contribuido a ello.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. El Ayuntamiento Rojo («Rotes Rathaus»)",
      short: "",
      info: "Es la sede del alcalde y del Senado de Berlín. El llamativo edificio es también un conocido punto de referencia de la ciudad. El edificio, situado cerca de Alexanderplatz, debe su nombre a su fachada de ladrillos rojos brillantes." +
      "Se construyó en estilo neorrenacentista entre 1861 y 1869. Durante siglos, los ladrillos rojos se utilizaron a menudo para la construcción de iglesias y edificios importantes debido a la falta de grandes minas de piedra en la región.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Iglesia de Santa María («Marienkirche»)",
      short: "",
      info: "La iglesia fue originalmente una iglesia católica romana, pero se convirtió en una iglesia protestante luterana desde la Reforma en 1539. En el exterior de la iglesia hay una estatua de Martín Lutero, el fundador de la Reforma. Junto con la iglesia de San Nicolás, la iglesia de Santa María es la más antigua de Berlín." +
      "En su interior destaca el mural de la Danza de la Muerte de la Edad Media. Las representaciones de la Danza de la Muerte aparecieron en Europa durante la epidemia de peste. El mural significa que la muerte llega de forma repentina e inesperada. En esta teología pintada de la Edad Media, la danza con la muerte se dirige a la vida: examinar el modo de vida, aceptar lo inevitable y, al mismo tiempo, mirar más allá de los límites de la vida aquí y ahora.",
      lat: 52.517037,
      lon: 13.378756,
      url: "",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Catedral de Berlín («Berliner Dom»)",
      short: "",
      info: "La historia de la Catedral de Berlín comienza en 1465, cuando se inició la construcción de una pequeña iglesia en la isla del Spree. En 1747, durante el reinado de Federico el Grande, la iglesia fue reconstruida en estilo barroco con una cúpula diseñada por Johann Boumann el Viejo. Unos 70 años después, Karl Friedrich Schinkel renovó la iglesia en estilo clasicista." +
      "Con el tiempo, hubo varias renovaciones pequeñas. En 1894, el emperador Guillermo II decidió que la catedral debía ser más grande. Aprobó un diseño de Julius Carl Raschdorff, que requería derribar la antigua catedral. La nueva catedral, construida entre 1894 y 1905, pretendía rivalizar con la Basílica de San Pedro de Roma. Esta nueva catedral de Berlín se convirtió en la iglesia principal de la dinastía Hohenzollern bajo el emperador Guillermo II." +
      "Hoy en día, la Catedral de Berlín es la iglesia protestante más grande de Alemania.",
      lat: 52.519473,
      lon: 13.401195,
      url: "",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Calle «Unter den Linden»",
      short: "",
      info: "Está a punto de entrar en la calle «Unter den Linden», que significa «Bajo los tilos». Esta calle fue creada en el siglo XVI y plantada con tilos. Conducía desde el Palacio Municipal de Berlín (actual «Foro Humboldt») hasta el Tiergarten, un gran parque situado detrás de la Puerta de Brandemburgo. El gobernante Johann Georg lo planificó como un camino para montar a caballo y cazar desde su palacio hasta el Tiergarten." +
      "En el siglo XVIII, Federico el Grande, que gobernó Prusia de 1740 a 1786, convirtió la calle en una magnífica avenida. Encontrará su gran estatua (él sentado a caballo) un poco más adelante, justo en medio de la calle." +
      "Federico el Grande era una personalidad muy contradictoria. Por un lado, seguía la filosofía de la ilustración y valoraba la educación y la cultura. Fundó escuelas, apoyó las artes e invitó a su corte a pensadores famosos como Voltaire. También promovió la tolerancia religiosa, permitió a personas de distintas creencias practicar libremente su religión y abolió la tortura. Por otro lado, promovió la militarización de Prusia, libró tres guerras por Silesia y se unió a las grandes potencias europeas de la época (junto a Francia, Gran Bretaña, Austria y Rusia) con su participación en la Guerra de los Siete Años de 1756-1763. Junto con Austria y Rusia, inició sin escrúpulos la partición y destrucción de Polonia.",
      lat: 52.516275,
      lon: 13.388253,
      url: "",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Palacio de Berlín / actual Foro Humboldt",
      short: "",
      info: "El Palacio de Berlín fue la residencia principal de los reyes prusianos." +
      "Durante la Segunda Guerra Mundial, el Palacio de Berlín sufrió graves daños a causa de los bombardeos aliados. Tras la guerra, el palacio se ubicó en Berlín Este. El gobierno de Alemania Oriental decidió demoler el palacio en ruinas en 1950, por considerarlo un símbolo del poder imperial y prusiano. En su lugar, el gobierno de Alemania Oriental construyó el Palast der Republik (Palacio de la República), que sirvió como parlamento de la RDA y como centro cultural. Este edificio fue posteriormente cerrado y demolido debido al material de amianto con el que fue construido. Tras la reunificación de Alemania, se decidió reconstruir el Palacio de Berlín. La reconstrucción comenzó en 2013, utilizando fotografías y planos antiguos para recrear su aspecto histórico." +
      "El palacio reconstruido, terminado en 2020, se conoce ahora como Foro Humboldt. Funciona como museo y centro cultural, mostrando arte y exposiciones interactivas de todo el mundo.",
      lat: 52.516934,
      lon: 13.401944,
      url: "",
      img: "forohumboldt",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. El Museo Histórico Alemán («Das Deutsche Historische Museum»)",
      short: "",
      info: "El edificio del Museo Histórico es la construcción más antigua de la calle Unter den Linden. Inicialmente se construyó como arsenal de armas a principios del siglo XVIII. Más tarde, en el siglo XIX, se convirtió en el Museo del Real Ejército Prusiano. En el siglo XX, fue utilizado por los nazis para exposiciones que apoyaban la ideología y los objetivos de los nacionalsocialistas." +
      "Tras la Segunda Guerra Mundial, el gobierno de Alemania Oriental lo utilizó como museo central de la historia socialista de la RDA. Con la reunificación alemana en 1990, el Museo Histórico Alemán, fundado tres años antes en Berlín Occidental, se hizo cargo del edificio y sus colecciones.",
      lat: 52.519391,
      lon: 13.396493,
      url: "",
      img: "dhm",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Nuevo Guardia («Neue Wache»)",
      short: "",
      info: "«Neue Wache», en Unter den Linden, es el monumento conmemorativo central en Alemania para las víctimas de la guerra y la tiranía. Este edificio relativamente pequeño se encuentra justo al lado de la armería, que ahora alberga el Museo Histórico Alemán. Se construyó entre 1816 y 1818 según los planos de Karl Friedrich Schinkel y en 1993 se convirtió en el monumento central de la República Federal de Alemania en memoria de las víctimas de la guerra y la tiranía." +
      "En su interior, una «llama eterna» arde sobre urnas que contienen los restos de un prisionero desconocido de un campo de concentración y de un soldado desconocido. La escultura «Madre con hijo muerto» («Piedad»), de Käthe Kollwitz, se encuentra en el interior desde 1993.",
      lat: 52.518625,
      lon: 13.396869,
      url: "",
      img: "neuewache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Ópera Estatal de Berlín",
      short: "La Ópera Estatal de Berlín es uno de los teatros de ópera más antiguos de Alemania.",
      info: "La Ópera Estatal de Berlín fue inaugurada en 1742 y fue fundada por el gobernante Federico el Grande de Prusia. Está destinada a ser un centro de ópera y ballet.",
      lat: 52.515434,
      lon: 13.388935,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Berlin_Staatsoper_2010.jpg/2560px-Berlin_Staatsoper_2010.jpg",
      img: "opera_estatal",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Humboldt-Universität",
      short: "La Universidad de Berlín es una de las universidades más antiguas y prestigiosas de Alemania.",
      info: "Fundada en 1809, la Universidad de Berlín (hoy: Humboldt-Universität zu Berlin) tiene su sede en el antiguo palacio del príncipe Heinrich. Recibió el nombre de los eruditos Wilhelm y Alexander von Humboldt en 1949.",
      lat: 52.514601,
      lon: 13.381777,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Humboldt_University_Main_Building.jpg/2560px-Humboldt_University_Main_Building.jpg",
      img: "humboldt_universitat",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Plaza Bebelplatz",
      short: "Plaza conmemorativa de la quema de libros del 10 de mayo de 1933.",
      info: "En el suelo de la Bebelplatz se encuentra un monumento conmemorativo de Micha Ullman dedicado a la quema de libros. Los transeúntes pueden mirar a través de un cristal una habitación blanca y vacía que en su día albergó libros.",
      lat: 52.516934,
      lon: 13.386007,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bebelplatz_in_Berlin.JPG/2560px-Bebelplatz_in_Berlin.JPG",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstraße",
      short: "Una de las calles más famosas del centro histórico de Berlín.",
      info: "La Friedrichstraße debe su nombre al príncipe elector Federico III de Brandeburgo. A principios del siglo XX, se convirtió en uno de los cruces más concurridos de la ciudad.",
      lat: 52.520081,
      lon: 13.388472,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Friedrichstra%C3%9Fe_Berlin_2017.jpg/2560px-Friedrichstra%C3%9Fe_Berlin_2017.jpg",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "Uno de los hoteles más lujosos y conocidos de Alemania.",
      info: "El Hotel Adlon Kempinski fue reabierto en 1997 y sigue la tradición del Hotel Adlon original, inaugurado en 1907 y gravemente destruido en 1945.",
      lat: 52.515783,
      lon: 13.389077,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Adlon_Hotel_Berlin_2011.jpg/2560px-Adlon_Hotel_Berlin_2011.jpg",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. La Puerta de Brandemburgo",
      short: "Símbolo histórico de la reunificación alemana.",
      info: "Construida entre 1788 y 1791, la Puerta de Brandemburgo fue diseñada por Carl Gotthard Langhans. Fue un símbolo de paz y más tarde un símbolo de la división y reunificación de Alemania.",
      lat: 52.516275,
      lon: 13.377702,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Brandenburger_Tor_Berlin_2018.jpg/2560px-Brandenburger_Tor_Berlin_2018.jpg",
      img: "puerta_brandemburgo",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Monumento a los judíos asesinados en Europa",
      short: "Monumento conmemorativo a los seis millones de judíos asesinados.",
      info: "Diseñado por Peter Eisenman, el monumento consta de 2.711 estelas de hormigón y está dedicado a los judíos asesinados bajo el régimen nazi. Abierto desde el 12 de mayo de 2005.",
      lat: 52.515547,
      lon: 13.390873,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Memorial_to_the_Jewish_Victims_of_the_Holocaust_Berlin.jpg/2560px-Memorial_to_the_Jewish_Victims_of_the_Holocaust_Berlin.jpg",
      img: "monumento_judios",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (Parlamento alemán)",
      short: "Sede del Bundestag alemán y lugar histórico.",
      info: "Construido entre 1884 y 1894, el Reichstag ha sido testigo de importantes eventos en la historia alemana, incluyendo la proclamación de la República y el incendio del Reichstag en 1933.",
      lat: 52.518611,
      lon: 13.375056,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Reichstag_in_Berlin_-_panoramio.jpg/2560px-Reichstag_in_Berlin_-_panoramio.jpg",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "El pulmón verde de Berlín.",
      info: "Transformado varias veces a lo largo de los siglos, el Tiergarten es un gran parque que ha pasado de ser un coto de caza a un parque público inglés. Sufrió mucho durante la Segunda Guerra Mundial.",
      lat: 52.516273,
      lon: 13.351289,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tiergarten_Berlin.jpg/2560px-Tiergarten_Berlin.jpg",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Columna de la Victoria",
      short: "Monumento conmemorativo a las Guerras de la Unificación.",
      info: "Construida entre 1864 y 1873, la Columna de la Victoria fue trasladada a su ubicación actual en 1939. Es uno de los monumentos más importantes de Alemania.",
      lat: 52.514223,
      lon: 13.350087,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Siegessaeule_Berlin_2013.jpg/2560px-Siegessaeule_Berlin_2013.jpg",
      img: "columna_victoria",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  ua: [
    {
      name: "1. Телевежа («Фернзехтурм»)",
      short: "",
      info: "Телевежа є однією з найвідоміших будівель Берліна і є типовою для архітектури Німецької Демократичної Республіки (НДР), тобто Східної, комуністичної Німеччини. Берлінська телевежа (368 метрів) - найвища будівля в Німеччині, будівництво якої було завершено в 1969 році в НДР. Тоді, в середині шістдесятих, змагання між Сходом і Заходом було в самому розпалі. Все повинно було бути вищим, швидшим і дальшим. Країни Східного блоку були на підйомі після успішного польоту Супутника, а НДР прагнула створити наступну сенсацію з телевізійною вежею. Амбітний проект переслідував дві мети: утримати символ влади і технічної переваги над Заходом, а також покращити інфраструктуру радіомовлення, щоб допомогти поширенню державного телебачення. Тим не менш, телебачення НДР зберегло поганий імідж серед населення. У Берліні та вздовж внутрішньонімецького кордону багато східних німців вечорами таємно вмикали західне телебачення. Після 1989 року соціологи з подивом виявили, що західнонімецьке і східнонімецьке суспільство ментально розійшлися набагато менше, ніж очікувалося. Поширення західного телебачення в НДР, ймовірно, зіграло свою роль у цьому.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. Червона ратуша («Rotes Rathaus»)",
      short: "",
      info: "Це резиденція бургомістра і сенату Берліна. Яскрава будівля є також відомою пам'яткою міста. Будівля біля Александерплац отримала свою назву завдяки фасаду з яскраво-червоної цегли. Вона була побудована в стилі неоренесансу між 1861-1869 роками. Протягом століть червону цеглу часто використовували для будівництва церков і важливих будівель через відсутність великих кам'яних копалень в регіоні.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Костел Святої Марії («Марієнкірхе»)",
      short: "",
      info: "Спочатку церква була римо-католицькою, але після Реформації 1539 року стала лютеранською протестантською церквою. Біля церкви також можна знайти статую Мартіна Лютера, засновника Реформації. Разом з церквою Святого Миколая, церква Святої Марії є найстарішою церквою в Берліні. Усередині церкви особливої уваги заслуговує фреска «Танець смерті» з часів Середньовіччя. Зображення Танцю смерті з'явилося в Європі під час епідемії чуми. Фреска означає, що смерть приходить раптово і несподівано. У цій мальованій теології Середньовіччя танець зі смертю спрямований на життя: дослідження способу життя, прийняття неминучого, і в той же час погляд за межі життя тут і зараз.",
      lat: 52.523005,
      lon: 13.409247,
      url: "https://cdn.pixabay.com/photo/2016/09/17/08/19/st-mary-s-church-1673517_1280.jpg",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Берлінський собор («Берлінський дім»)",
      short: "",
      info: "Історія Берлінського собору починається в 1465 році, коли на острові Шпрее почалося будівництво невеликої церкви. У 1747 році, за часів правління Фрідріха Великого, церква була перебудована в стилі бароко з куполом, спроектованим Йоганном Буманом Старшим. Приблизно через 70 років Карл Фрідріх Шинкель відновив церкву в стилі класицизму. Згодом відбулося ще кілька невеликих реконструкцій. Потім, у 1894 році, імператор Вільгельм II вирішив, що собор має бути величнішим. Він затвердив проект Юліуса Карла Рашдорфа, який передбачав знесення старого собору. Новий собор, збудований між 1894 і 1905 роками, мав конкурувати з базилікою Святого Петра в Римі. Цей новий Берлінський собор став головною церквою для династії Гогенцоллернів за часів імператора Вільгельма II. Сьогодні Берлінський собор є найбільшою протестантською церквою в Німеччині.",
      lat: 52.514609,
      lon: 13.289235,
      url: "https://cdn.pixabay.com/photo/2016/09/14/08/38/berlin-cathedral-1666013_1280.jpg",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Вулиця «Унтер ден Лінден»",
      short: "",
      info: "Ви виходите на вулицю «Унтер ден Лінден», що в перекладі означає «Під липами». Ця вулиця була створена в 16 столітті і засаджена липами. Вона вела від Берлінського міського палацу (нині «Форум Гумбольдта») до Тіргартена, великого парку за Бранденбурзькими воротами. Вона була запланована для правителя Йоганна Георга як шлях для верхової їзди та полювання, що вів від його палацу до Тіргартена. У 18 столітті Фрідріх Великий, який правив Пруссією з 1740 по 1786 рік, перетворив вулицю на розкішний проспект. Ви знайдете його велику статую (він сидить на коні) трохи далі, прямо посеред вулиці. Фрідріх Великий був дуже суперечливою особистістю. З одного боку, він дотримувався філософії просвітництва і цінував освіту та культуру. Він засновував школи, підтримував мистецтво і запрошував до свого двору відомих мислителів, таких як Вольтер. Він також пропагував релігійну толерантність, дозволяв людям різних віросповідань вільно сповідувати свою релігію і скасував тортури. З іншого боку, він сприяв мілітаризації Пруссії, провів три війни за Сілезію і приєднався до лав великих європейських держав того часу (поряд з Францією, Великобританією, Австрією та Росією) через участь у Семирічній війні 1756-1763 років. Разом з Австрією та Росією він безсовісно ініціював поділ і знищення Польщі.",
      lat: 52.516583,
      lon: 13.382345,
      url: "https://cdn.pixabay.com/photo/2019/12/12/19/34/berlin-4680872_1280.jpg",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Берлінський палац / сьогодні Гумбольдт-форум",
      short: "",
      info: "Берлінський палац був головною резиденцією прусських королів. Під час Другої світової війни Берлінський палац був сильно пошкоджений бомбардуваннями союзників. Після війни палац опинився у Східному Берліні. У 1950 році східнонімецький уряд вирішив знести зруйнований палац, розглядаючи його як символ імперської та прусської влади. На його місці східнонімецький уряд побудував Палац Республіки ( Palast der Republik ), який слугував парламентом НДР та культурним центром. Пізніше ця будівля була закрита і знесена через азбест, з якого вона була збудована. Після об'єднання Німеччини було прийнято рішення відбудувати Берлінський палац. Реконструкцію розпочали у 2013 році, використовуючи старі фотографії та плани, щоб відтворити його історичний вигляд. Відбудований палац, завершений у 2020 році, тепер відомий як Форум Гумбольдта. Він слугує музейним та культурним центром, де демонструються мистецькі та інтерактивні виставки з усього світу.",
      lat: 52.521182,
      lon: 13.391089,
      url: "https://cdn.pixabay.com/photo/2020/01/01/21/40/humboldt-forum-4734721_1280.jpg",
      img: "humboldt_forum",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. Німецький історичний музей («Das Deutsche Historische Museum»)",
      short: "",
      info: "Будівля Історичного музею є найстарішою спорудою на вулиці Унтер-ден-Лінден. Спочатку вона була побудована як арсенал зброї на початку 18 століття. Пізніше, у 19 столітті, він став Музеєм Королівської прусської армії. У 20 столітті нацисти використовували його для виставок, які підтримували ідеологію та цілі націонал-соціалістів. Після Другої світової війни він використовувався східнонімецьким урядом як центральний музей соціалістичної історії НДР. Після об'єднання Німеччини у 1990 році будівлю та її колекції перебрав на себе Німецький історичний музей, заснований трьома роками раніше у Західному Берліні.",
      lat: 52.516972,
      lon: 13.388588,
      url: "https://cdn.pixabay.com/photo/2018/10/03/09/27/berlin-3726992_1280.jpg",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Нова варта. («Neue Wache»)",
      short: "",
      info: "«Нова варта» на Унтер-ден-Лінден є центральним меморіалом у Німеччині, присвяченим жертвам війни та тиранії. Ця відносно невелика будівля розташована поруч з арсеналом, в якому зараз знаходиться Німецький історичний музей. Вона була побудована між 1816 і 1818 роками за проектом Карла Фрідріха Шинкеля і стала центральним меморіалом у Федеративній Республіці Німеччина для жертв війни і тиранії в 1993 році. Всередині горить «вічний вогонь» над урнами з останками невідомого в'язня концтабору та невідомого солдата. Скульптура «Мати з мертвим сином» («Pieta») авторства Кете Колльвіц знаходиться всередині з 1993 року.",
      lat: 52.516820,
      lon: 13.388351,
      url: "https://cdn.pixabay.com/photo/2018/10/09/13/04/berlin-3739451_1280.jpg",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Берлінська державна опера",
      short: "",
      info: "Берлінська державна опера є одним з найстаріших оперних театрів Німеччини і була відкрита в 1742 році. Берлінська державна опера була заснована правителем Пруссії Фрідріхом Великим. Вона була задумана як центр опери та балету.",
      lat: 52.516458,
      lon: 13.377866,
      url: "https://cdn.pixabay.com/photo/2016/09/04/16/45/opera-1646133_1280.jpg",
      img: "berliner_staatsoper",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Університет імені Гумбольдта",
      short: "",
      info: "Берлінський університет (сьогодні: Humboldt-Universität zu Berlin) був заснований у 1809 році прусським королем Фрідріхом Вільгельмом III і розпочав викладання у 1810 році. У 1949 році найбільший і найстаріший університет Берліна був названий на честь вчених-універсалів Вільгельма та Олександра фон Гумбольдтів. Його штаб-квартира знаходиться в колишньому палаці принца Генріха (брата Фрідріха Великого).",
      lat: 52.51453,
      lon: 13.39053,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Humboldt-University.jpg/1280px-Humboldt-University.jpg",
      img: "humboldt_university",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Бебельплац",
      short: "",
      info: "Ви стоїте перед будівлею юридичного факультету Університету Гумбольдта на Бебельплац. На землі ви можете знайти меморіал Міхи Ульмана, присвячений спаленню книги 10 травня 1933 року, на місці, де нацисти здійснили жахливий ритуал посеред міста."+
      "У центрі Бебельплатц відкривається підлога. Перехожі можуть зазирнути крізь скляну панель у білу порожню кімнату з полицями, на яких колись стояли книги."+
      "Нацистський режим спалював книги, щоб індоктринувати університети своєю ідеологією. Через три місяці після приходу Гітлера до влади, пожежі мали показати, що «націонал-соціалістична революція» не пощадить письменників та авторів. Нацистський письменник Ганс Йост пізніше сказав, що революція не зупиниться і на письменницьких столах."+
      "Раніше Німецький студентський союз закликав університети мобілізуватися проти «єврейського духу підривної діяльності». Були опубліковані списки заборонених книг, наприклад, книги Генріха Манна, Еріха Кестнера, Еріха Марії Ремарка, Ліона Фейхтвангера, Курта Тухольського, Зигмунда Фройда та ін. були позначені як «аморальні» та «декадентські».",
      lat: 52.51560,
      lon: 13.39360,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bebelplatz_2006.JPG/1280px-Bebelplatz_2006.JPG",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Фрідріхштрассе",
      short: "",
      info: "Фрідріхштрассе - одна з найвідоміших вулиць в історичному центрі Берліна, названа на честь курфюрста Фрідріха III Бранденбурзького, який у 1701 році став першим прусським королем Фрідріхом I, «Королем у Пруссії». На початку 20 століття перехрестя з бульваром Унтер-ден-Лінден перетворилося на одне з найжвавіших у місті. Незліченна кількість кінних екіпажів, таксі, автомобілів, ручних візків, автобусів, велосипедистів і пішоходів ділили вулицю.",
      lat: 52.52020,
      lon: 13.39740,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Friedrichstrasse_Berlin.JPG/1280px-Friedrichstrasse_Berlin.JPG",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Готель «Адлон",
      short: "",
      info: "Готель Adlon Kempinski - один з найрозкішніших і найвідоміших готелів Німеччини. Він був знову відкритий у 1997 році і продовжує традиції оригінального готелю «Адлон», який відкрився у 1907 році і був сильно зруйнований у 1945 році.",
      lat: 52.51551,
      lon: 13.38885,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adlon_Kempinski_Berlin.jpg/1280px-Adlon_Kempinski_Berlin.jpg",
      img: "adlon_hotel",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. Бранденбурзькі ворота",
      short: "",
      info: "Бранденбурзькі ворота були побудовані між 1788 і 1791 роками. Вони були побудовані на замовлення короля Пруссії Фрідріха Вільгельма II. Брама побудована в класичному стилі і має висоту 26 метрів. Спочатку вона була побудована як символ миру. Квадригою, колісницею, запряженою четвіркою коней, керує Ейрена, богиня миру."+
      "У 1806 році, коли Наполеон завоював Берлін, він забрав Квадригу, статую на вершині брами, до Парижа. Після поразки Наполеона у 1814 році Квадригу повернули до Берліна і знову встановили на брамі."+
      "Після Другої світової війни і поділу Берліна Бранденбурзькі ворота опинилися поруч з Берлінським муром і стали символом поділу Німеччини. Коли Берлінський мур впав у 1989 році, ворота стали символом возз'єднання Німеччини."+
      "Будівлі на захід від Бранденбурзьких воріт більше не є частиною історичної частини Берліна, тобто Берліна до 1750-х років. Від Бранденбурзьких воріт починається колишній американський сектор Берліна (1945-1990).",
      lat: 52.51630,
      lon: 13.37770,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Brandenburger_Tor_2004.jpg/1280px-Brandenburger_Tor_2004.jpg",
      img: "brandenburg_gate",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Меморіал вбитим євреям Європи",
      short: "",
      info: "Меморіал вбитим євреям Європи в історичному центрі Берліна вшановує пам'ять приблизно шести мільйонів євреїв, які були вбиті під час правління Адольфа Гітлера та націонал-соціалістів. Меморіал був спроектований Пітером Айзенманом і складається з 2711 кубічних бетонних стел загальною площею 19 000 квадратних метрів. Він відкритий для відвідувачів з 12 травня 2005 року і покликаний нагадувати політикам і людям в центрі міста про злочини націонал-соціалістичної Німеччини, щоб вони ніколи більше не повторилися.",
      lat: 52.51630,
      lon: 13.37810,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Memorial_to_the_Jewish_Victims_of_the_Holocaust.jpg/1280px-Memorial_to_the_Jewish_Victims_of_the_Holocaust.jpg",
      img: "holocaust_memorial",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Рейхстаг (німецький парламент)",
      short: "",
      info: "Будівля Рейхстагу була побудована з 1884 по 1894 рік. Після проголошення Німецької імперії в 1871 році Берлін став імперською столицею. Новостворений парламент потребував приміщення. З 1990 року будівля Рейхстагу є резиденцією німецького Бундестагу."+
      "З будівлею Рейхстагу пов'язані важливі переломні моменти та події в історії Німеччини. 9 листопада 1918 року політик СДПН Філіп Шайдеман проголосив Республіку з балкона біля західного порталу. Увечері 27 лютого 1933 року сталася «пожежа Рейхстагу». Пленарна зала та купол були повністю знищені. Червоний прапор Радянського Союзу, піднятий двома червоноармійцями 30 квітня 1945 року, символізував перемогу над «Третім Рейхом».",
      lat: 52.51862,
      lon: 13.37625,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Reichstag_Berlin.jpg/1280px-Reichstag_Berlin.jpg",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Тіргартен",
      short: "",
      info: "Тіргартен - це зелене серце Берліна. Тіргартен вже пережив кілька трансформацій. Наприкінці 17 століття курфюрст Фрідріх ІІІ перетворив колишні мисливські угіддя на «парк відпочинку для населення». Згодом парк переплановували за кількома моделями, включаючи перетворення Тіргартена на англійський громадський парк в середині 19 століття. Останній рік Другої світової війни став катастрофічним для парку. Після війни парк був майже повністю спустошений берлінцями, які шукали дрова. Відновлення парку розпочалося у 1949 році і на той час могло здійснюватися майже виключно за рахунок дерев, які дарували з інших німецьких міст.",
      lat: 52.51444,
      lon: 13.35540,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tiergarten_bei_Berlin_-_Wasser_und_Schloss.jpg/1280px-Tiergarten_bei_Berlin_-_Wasser_und_Schloss.jpg",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Колона Перемоги",
      short: "",
      info: "Колона Перемоги на Великій Штерн у Великому Тіргартені є одним з найважливіших національних пам'ятників Німеччини та однією з найважливіших визначних пам'яток Берліна. Побудована між 1864 і 1873 роками на честь Об'єднавчих воєн, вона була перенесена на своє нинішнє місце в 1939 році. Спочатку вона стояла перед Рейхстагом.",
      lat: 52.51468,
      lon: 13.35021,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2012_Siegess%C3%A4ule_in_Berlin.jpg/1280px-2012_Siegess%C3%A4ule_in_Berlin.jpg",
      img: "victory_column",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  fr: [
    {
      name: "1. Tour de télévision (« Fernsehturm »)",
      short: "",
      info: "La tour de télévision est l'un des bâtiments les plus célèbres de Berlin et elle est typique de l'architecture de la République démocratique allemande (RDA), c'est-à-dire de l'Allemagne de l'Est, l'Allemagne communiste. La tour de télévision de Berlin (368 mètres) est le plus haut bâtiment d'Allemagne. Elle a été achevée en 1969 en RDA. À l'époque, au milieu des années soixante, la concurrence entre l'Est et l'Ouest battait son plein. Tout devait être plus haut, plus rapide, plus loin. Les pays du bloc de l'Est étaient en plein essor après le vol réussi du Spoutnik, et la RDA voulait créer la prochaine sensation avec la tour de télévision. Ce projet ambitieux avait deux objectifs : brandir un symbole de puissance et de la supériorité technologique par rapport à l'Ouest, et améliorer l'infrastructure de radiodiffusion pour aider à la diffusion de la télévision d'État. Néanmoins, la télévision de la RDA conserve une mauvaise image auprès de la population. À Berlin et tout au long de la frontière intérieure de l'Allemagne, de nombreux Allemands de l'Est allumaient secrètement la télévision de l’ouest le soir. Après 1989, les sociologues ont été surpris de constater que la société ouest-allemande et la société est-allemande avaient beaucoup moins divergé mentalement que prévu. La diffusion de la télévision occidentale en RDA n'y est sans doute pas étrangère.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2.  L'hôtel de ville rouge (« Rotes Rathaus »)",
      short: "",
      info: "L'hôtel de ville rouge est le siège du maire et du sénat de Berlin. Ce bâtiment remarquable est également un point de repère bien connu de la ville. Le bâtiment situé près de l'Alexanderplatz doit son nom à sa façade en briques rouge vif. Il a été construit dans le style néo-renaissance entre 1861 et 1869. Pendant des siècles, les briques rouges ont souvent été utilisées pour la construction d'églises et de bâtiments importants en raison de l'absence de grandes mines de pierre dans la région.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Église Sainte-Marie (« Marienkirche »)",
      short: "",
      info: "L'église était à l'origine une église catholique romaine, mais elle est devenue une église protestante luthérienne depuis la Réforme en 1539. Une statue de Martin Luther, le fondateur de la Réforme, se trouve à l'extérieur de l'église. Avec l'église Saint-Nicolas, l'église Sainte-Marie est la plus ancienne église de Berlin. À l'intérieur de l'église, la peinture murale de la danse macabre datant du Moyen- ge est particulièrement intéressante. Les représentations de la danse macabre sont apparues en Europe lors de l'épidémie de peste. La peinture murale signifie que la mort survient de manière soudaine et inattendue. Dans cette théologie peinte du Moyen  ge, la danse macabre s'adresse à la vie : examiner le mode de vie, accepter l'inévitable et, en même temps, regarder au-delà des limites de la vie ici et maintenant.",
      lat: 52.521918,
      lon: 13.407355,
      url: "https://pixabay.com/de/photos/architettura-berlino-cattedrale-marienkirche-4262511/",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. La cathédrale de Berlin (« Berliner Dom »)",
      short: "",
      info: "L'histoire de la cathédrale de Berlin commence en 1465, lorsque débute la construction d'une petite église sur l'île de la Spree. En 1747, sous le règne de Frédéric le Grand, l'église a été reconstruite dans le style baroque avec un dôme conçu par Johann Boumann l'Ancien. Environ 70 ans plus tard, Karl Friedrich Schinkel a rénové l'église dans un style classique. Au fil du temps, il y eut plusieurs petites rénovations. En 1894, l'empereur Guillaume II décida que la cathédrale devait être plus imposante. Il approuva le projet de Julius Carl Raschdorff, qui nécessitait la démolition de l'ancienne cathédrale. La nouvelle cathédrale, construite entre 1894 et 1905, devait rivaliser avec la basilique Saint-Pierre de Rome. Cette nouvelle cathédrale de Berlin est devenue l'église principale de la dynastie des Hohenzollern sous l'empereur Guillaume II. Aujourd'hui, la cathédrale de Berlin est la plus grande église protestante d'Allemagne.",
      lat: 52.518633,
      lon: 13.401409,
      url: "https://pixabay.com/de/photos/berlin-cattedrale-cattedrale-4341693/",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5.  La rue «Unter den Linden»",
      short: "",
      info: "Vous êtes sur le point d'entrer dans la rue « Unter den Linden », qui signifie « Sous les tilleuls ». Cette rue a été créée au 16e siècle et plantée de tilleuls. Elle menait du palais municipal de Berlin (aujourd'hui « Humboldt Forum ») au Tiergarten, un grand parc situé derrière la porte de Brandebourg. Il a été conçu pour le souverain Johann Georg comme un chemin d'équitation et de chasse menant de son palais au Tiergarten. Au XVIIIe siècle, Frédéric le Grand, qui régna sur la Prusse de 1740 à 1786, transforma la rue en une magnifique avenue. Vous trouverez sa grande statue (lui assis sur un cheval) un peu plus loin, en plein milieu de la rue. Frédéric le Grand était une personnalité très contradictoire. D'une part, il suivait la philosophie des Lumières et accordait de l'importance à l'éducation et à la culture. Il a fondé des écoles, soutenu les arts et invité à sa cour des penseurs célèbres tels que Voltaire. Il a également encouragé la tolérance religieuse, permis aux personnes de différentes confessions de pratiquer librement leur religion et aboli la torture. D'autre part, il encourage la militarisation de la Prusse, mène trois guerres pour la Silésie et rejoint les rangs des grandes puissances européennes de l'époque (aux côtés de la France, de la Grande-Bretagne, de l'Autriche et de la Russie) en s'engageant dans la guerre de Sept Ans de 1756 à 1763. Avec l'Autriche et la Russie, il a initié sans scrupules le partage et la destruction de la Pologne.",
      lat: 52.516057,
      lon: 13.375529,
      url: "https://pixabay.com/de/photos/berlino-unter-den-linden-1439724/",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. Le palais de Berlin / aujourd'hui le forum Humboldt",
      short: "",
      info: "Le palais de Berlin était la résidence principale des rois de Prusse. Pendant la Seconde Guerre mondiale, le palais de Berlin a été fortement endommagé par les bombardements alliés. Après la guerre, le palais était situé à Berlin-Est. Le gouvernement est-allemand a décidé de démolir le palais en ruine en 1950, le considérant comme un symbole du pouvoir impérial et prussien. À sa place, le gouvernement est-allemand a construit le Palast der Republik (Palais de la République), qui a servi de parlement de la RDA et de centre culturel. Ce bâtiment a ensuite été fermé et démoli en raison de l'amiante qu'il contenait. Après la réunification de l'Allemagne, il a été décidé de reconstruire le palais de Berlin. La reconstruction a commencé en 2013, en utilisant d'anciennes photographies et des plans pour recréer son apparence historique. Le palais reconstruit, achevé en 2020, est désormais connu sous le nom de Humboldt Forum. Il sert de musée et de centre culturel, présentant des œuvres d'art et des expositions interactives du monde entier.",
      lat: 52.518393,
      lon: 13.398499,
      url: "https://pixabay.com/de/photos/humboldt-forum-berlino-3873897/",
      img: "humboldt_forum",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. Le musée historique allemand («Das Deutsche Historische Museum»)",
      short: "",
      info: "Le bâtiment du musée historique est la plus ancienne construction de la rue Unter den Linden. Il a d'abord été construit comme arsenal au début du 18e siècle. Plus tard, au 19e siècle, il est devenu le musée royal de l'armée prussienne. Au XXe siècle, il a été utilisé par les nazis pour des expositions qui soutenaient l'idéologie et les objectifs des nationaux-socialistes. Après la Seconde Guerre mondiale, il a été utilisé par le gouvernement est-allemand comme musée central de l'histoire socialiste de la RDA. Lors de la réunification de l'Allemagne en 1990, le Musée historique allemand, qui avait été fondé trois ans plus tôt à Berlin-Ouest, a repris le bâtiment et ses collections.",
      lat: 52.516651,
      lon: 13.388361,
      url: "https://pixabay.com/de/photos/museo-della-storia-berlino-3895714/",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8.  Nouvelle garde («Neue Wache»)",
      short: "",
      info: "La «Neue Wache» sur Unter den Linden est le principal mémorial d'Allemagne pour les victimes de la guerre et de la tyrannie. Ce bâtiment relativement petit est situé juste à côté de l'armurerie, qui abrite aujourd'hui le Musée historique allemand. Il a été construit entre 1816 et 1818 d'après les plans de Karl Friedrich Schinkel et est devenu en 1993 le mémorial central de la République fédérale d'Allemagne pour les victimes de la guerre et de la tyrannie. À l'intérieur, une « flamme éternelle » brûle au-dessus d'urnes contenant les restes d'un prisonnier de camp de concentration et d'un soldat inconnus. La sculpture « Mère avec fils mort » (« Pieta ») de Käthe Kollwitz se trouve à l'intérieur depuis 1993.",
      lat: 52.516649,
      lon: 13.387226,
      url: "https://pixabay.com/de/photos/denkmal-nuova-wache-berlino-3895717/",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Opéra d'État de Berlin",
      short: "",
      info: "L'Opéra d'État de Berlin est l'un des plus anciens opéras d'Allemagne et a été inauguré en 1742. L'Opéra d'État de Berlin a été fondé par le souverain Frédéric le Grand de Prusse. Il était destiné à devenir un centre d'opéra et de ballet.",
      lat: 52.515155,
      lon: 13.380670,
      url: "https://pixabay.com/de/photos/teatro-dell-opera-di-berlino-3388481/",
      img: "staatsoper_berlin",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Université Humboldt",
      short: "",
      info: "L'université de Berlin (aujourd'hui : Humboldt-Universität zu Berlin) a été fondée en 1809 par le roi de Prusse Friedrich Wilhelm III et a commencé à enseigner en 1810. En 1949, la plus grande et la plus ancienne université de Berlin a été baptisée en l'honneur des savants universels Wilhelm et Alexander von Humboldt. Elle a son siège dans l'ancien palais du prince Heinrich (le frère de Frédéric le Grand).",
      lat: 52.516072,
      lon: 13.388582,
      url: "https://pixabay.com/de/photos/universit%C3%A0-humboldt-berlino-4501749/",
      img: "humboldt_universitaet",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "",
      info: "Vous vous trouvez devant la faculté de droit de l'université Humboldt, sur la Bebelplatz. Au sol, vous trouverez un mémorial de Micha Ullman dédié à l'autodafé du 10 mai 1933, à l'endroit où les nazis ont procédé à un terrible rituel en pleine ville. Au centre de la Bebelplatz, le sol s'ouvre. Les passants peuvent regarder à travers une vitre dans une pièce blanche et vide avec des étagères qui contenaient autrefois des livres. Le régime nazi brûlait les livres pour endoctriner les universités avec son idéologie. Trois mois seulement après l'arrivée au pouvoir d'Hitler, ces incendies étaient destinés à montrer que la «révolution nationale-socialiste» n'épargnerait pas les écrivains et les auteurs. L'écrivain nazi Hanns Johst a déclaré plus tard que la révolution ne s'arrêterait pas non plus aux bureaux des écrivains. Auparavant, l'Union des étudiants allemands avait appelé les universités à se mobiliser contre « l'esprit juif de subversion ». Des listes de livres interdits ont été publiées, par exemple des livres de Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud, etc. ont été qualifiés d'«immoraux» et de «décadents».",
      lat: 52.516076,
      lon: 13.388747,
      url: "https://pixabay.com/de/photos/bebelplatz-berlino-1848073/",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. La rue Friedrich («Friedrichstraße»)",
      short: "",
      info: "La Friedrichstraße est l'une des rues les plus célèbres du centre historique de Berlin et porte le nom du prince-électeur Frédéric III de Brandebourg, qui devint le premier roi de Prusse en 1701, Frédéric Ier, « roi de Prusse ». Au début du XXe siècle, l'intersection avec le boulevard Unter den Linden est devenue l'une des plus animées de la ville. D'innombrables calèches, taxis, véhicules à moteur, charrettes à bras, autobus, cyclistes et piétons se partageaient la rue.",
      lat: 52.516406,
      lon: 13.387928,
      url: "https://pixabay.com/de/photos/friedrichstra%C3%9Fe-berlino-2817997/",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "",
      info: "L'hôtel Adlon Kempinski est l'un des hôtels les plus luxueux et les plus connus d'Allemagne. Il a été rouvert en 1997 et suit la tradition de l'hôtel Adlon original, qui a ouvert ses portes en 1907 et a été gravement détruit en 1945.",
      lat: 52.519200,
      lon: 13.390255,
      url: "https://pixabay.com/de/photos/hotel-adlon-berlino-3626269/",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. La porte de Brandebourg",
      short: "",
      info: "La porte de Brandebourg a été construite entre 1788 et 1791. Elle a été commandée par le roi Frédéric-Guillaume II de Prusse et conçue par l'architecte Carl Gotthard Langhans. La porte est construite dans un style classique et mesure 26 mètres de haut. Elle a été construite à l'origine comme un symbole de paix. Le quadrige, un char tiré par quatre chevaux, est conduit par Eirene, la déesse de la paix. En 1806, lorsque Napoléon a conquis Berlin, il a emporté le quadrige, la statue au sommet de la porte, à Paris. Après la défaite de Napoléon en 1814, le Quadrige a été ramené à Berlin et replacé sur la porte. Après la Seconde Guerre mondiale et la division de Berlin, la porte de Brandebourg se trouvait juste à côté du mur de Berlin et est devenue un symbole de la division de l'Allemagne. Lorsque le mur de Berlin est tombé en 1989, la porte est devenue un symbole de la réunification de l'Allemagne. Les bâtiments situés à l'ouest de la porte de Brandebourg ne font plus partie de la partie historique de Berlin, c'est-à-dire du Berlin d'avant les années 1750. L'ancien secteur de Berlin sous contrôle américain (1945-1990) commence à la porte de Brandebourg.",
      lat: 52.516275,
      lon: 13.377705,
      url: "https://pixabay.com/de/photos/porta-di-brandeburgo-berlino-3895711/",
      img: "brandenburger_tor",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Mémorial aux Juifs assassinés d'Europe",
      short: "",
      info: "Le Mémorial aux Juifs assassinés d'Europe, situé dans le centre historique de Berlin, commémore les quelque six millions de Juifs qui ont été assassinés sous le régime d'Adolf Hitler et des nationaux-socialistes. Le mémorial a été conçu par Peter Eisenman et se compose de 2711 stèles cubiques en béton couvrant une superficie totale de 19 000 mètres carrés. Il est ouvert au public depuis le 12 mai 2005 et a pour but de rappeler aux hommes politiques et aux habitants du centre de la ville les crimes de l'Allemagne nationale-socialiste afin qu'ils ne se reproduisent plus jamais.",
      lat: 52.514498,
      lon: 13.390563,
      url: "https://pixabay.com/de/photos/memoriale-agli-ebrei-berlino-3654721/",
      img: "memoriale_ebraico",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (Parlement allemand)",
      short: "",
      info: "Le bâtiment du Reichstag a été construit de 1884 à 1894. Avec la proclamation de l'Empire allemand en 1871, Berlin est devenue la capitale impériale. Le parlement nouvellement créé avait besoin d'un siège. Depuis 1990, le bâtiment du Reichstag est le siège du Bundestag allemand. Des tournants et des événements importants de l'histoire allemande sont associés au bâtiment du Reichstag. Le 9 novembre 1918, Philipp Scheidemann, membre du SPD, proclame la République depuis le balcon du portail ouest. Le soir du 27 février 1933, l'incendie du Reichstag s'est produit. La salle des séances plénières et la coupole sont entièrement détruites. Un drapeau rouge de l'Union soviétique, hissé par deux soldats de l'Armée rouge le 30 avril 1945, symbolise la victoire sur le «Troisième Reich».",
      lat: 52.518611,
      lon: 13.376111,
      url: "https://pixabay.com/de/photos/reichstag-berlino-3184601/",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "",
      info: "Le Tiergarten est le cœur vert de Berlin. Le Tiergarten a déjà subi plusieurs transformations. À la fin du XVIIe siècle, le prince électeur Friedrich III a transformé les anciens terrains de chasse en « parc d'agrément pour la population ». Au fil du temps, le parc a été réaménagé selon plusieurs modèles, dont la transformation du Tiergarten en parc public anglais au milieu du 19e siècle. La dernière année de la Seconde Guerre mondiale, en particulier, a été catastrophique pour le parc. Après la guerre, le parc a été presque entièrement dépouillé par les Berlinois à la recherche de bois de chauffage. Le reboisement du parc a commencé en 1949 et n'a pu être réalisé à l'époque que grâce à des dons d'arbres provenant d'autres villes allemandes.",
      lat: 52.516507,
      lon: 13.350493,
      url: "https://pixabay.com/de/photos/tiergarten-berlino-2879701/",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18.  Colonne de la Victoire",
      short: "",
      info: "La colonne de la Victoire, située sur la Großer Stern dans le Großer Tiergarten, est l'un des monuments nationaux les plus importants de Berlin et d'Allemagne.Construite entre 1864 et 1873 pour commémorer les guerres d'unification, elle a été déplacée à son emplacement actuel en 1939. Il se trouvait à l'origine devant le Reichstag.",
      lat: 52.514471,
      lon: 13.350422,
      url: "https://pixabay.com/de/photos/vittoria-berlino-1869254/",
      img: "colonna_vittoria",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
  po: [
    {
      name: "1. Torre de TV (“Fernsehturm”)",
      short: "",
      info: "A Torre de Televisão de Berlim (368 metros) é o edifício mais alto da Alemanha, concluído em 1969 na RDA. Nessa altura, em meados dos anos sessenta, a competição entre o Leste e o Oeste estava ao rubro. Tudo tinha de ser mais alto, mais rápido e mais longe. Os países do Bloco de Leste estavam em ascensão após o sucesso do voo Sputnik e a RDA pretendia criar a próxima sensação com a torre de televisão. O ambicioso projeto tinha dois objectivos: erguer um símbolo de poder e de vantagem técnica sobre o Ocidente e melhorar as infra-estruturas de radiodifusão para ajudar a difundir a televisão estatal. No entanto, a televisão da RDA tinha uma má imagem junto da população. Em Berlim e ao longo de toda a fronteira interna da Alemanha, muitos alemães de Leste ligavam secretamente a televisão ocidental à noite. Depois de 1989, os sociólogos ficaram surpreendidos com o facto de as sociedades da Alemanha Ocidental e da Alemanha Oriental terem divergido mentalmente muito menos do que se esperava. A difusão da televisão ocidental na RDA terá provavelmente contribuído para esse facto.",
      lat: 52.520735,
      lon: 13.409419,
      url: "https://cdn.pixabay.com/photo/2020/02/18/00/06/tv-tower-4858167_1280.jpg",
      img: "fernsehturm",
      location: "https://maps.app.goo.gl/EUVdLS22USeuqth18"
    },
    {
      name: "2. A Câmara Municipal Vermelha (“Rotes Rathaus”)",
      short: "",
      info: "O edifício perto da Alexanderplatz deve o seu nome à sua fachada de tijolos vermelhos brilhantes. Foi construído em estilo neo-renascentista entre 1861 e 1869. Durante séculos, os tijolos vermelhos foram frequentemente utilizados para a construção de igrejas e edifícios importantes, devido à falta de grandes minas de pedra na região.",
      lat: 52.517037,
      lon: 13.378756,
      url: "https://pixabay.com/de/photos/geb%C3%A4ude-architektur-uhrturm-rathaus-5926568/",
      img: "rotes_rathaus",
      location: "https://maps.app.goo.gl/8eFUbULYijp1gLc37"
    },
    {
      name: "3. Igreja de Santa Maria (“Marienkirche”)",
      short: "",
      info: "Também se pode encontrar uma estátua de Martinho Lutero, o fundador da Reforma, no exterior da igreja. Juntamente com a Igreja de São Nicolau, a Igreja de Santa Maria é a igreja mais antiga de Berlim. Particularmente digno de ser visto no interior da igreja é o mural da Dança da Morte da Idade Média. As representações da Dança da Morte surgiram na Europa durante a epidemia de peste. O mural significa que a morte chega de repente e inesperadamente. Nesta teologia pintada da Idade Média, a dança com a morte tem como objetivo a vida: examinar o modo de vida, aceitar o inevitável e, ao mesmo tempo, olhar para além dos limites da vida aqui e agora.",
      lat: 52.521918,
      lon: 13.407355,
      url: "https://pixabay.com/de/photos/architettura-berlino-cattedrale-marienkirche-4262511/",
      img: "marienkirche",
      location: "https://maps.app.goo.gl/eUaxqjhwf7fpH8dP9"
    },
    {
      name: "4. Catedral de Berlim (“Berliner Dom”)",
      short: "",
      info: "Em 1747, durante o reinado de Frederico, o Grande, a igreja foi reconstruída em estilo barroco com uma cúpula projectada por Johann Boumann, o Velho. Cerca de 70 anos mais tarde, Karl Friedrich Schinkel renovou a igreja num estilo classicista. Ao longo do tempo, houve várias pequenas renovações. Em 1894, o imperador Wilhelm II decidiu que a catedral precisava de ser mais grandiosa. Aprovou um projeto de Julius Carl Raschdorff, que exigia a demolição da antiga catedral. A nova catedral, construída entre 1894 e 1905, tinha como objetivo rivalizar com a Basílica de São Pedro em Roma. Esta nova catedral de Berlim tornou-se a igreja principal da dinastia Hohenzollern, sob a direção do imperador Guilherme II. Atualmente, a Catedral de Berlim é a maior igreja protestante da Alemanha.",
      lat: 52.518633,
      lon: 13.401409,
      url: "https://pixabay.com/de/photos/berlin-cattedrale-cattedrale-4341693/",
      img: "berliner_dom",
      location: "https://maps.app.goo.gl/o1Zosmz89NJY5b4z6"
    },
    {
      name: "5. Rua “Unter den Linden”",
      short: "",
      info: "Esta rua foi criada no século XVI e plantada com tílias. Conduzia do Palácio da Cidade de Berlim (atual “Fórum Humboldt”) ao Tiergarten, um grande parque atrás da Porta de Brandemburgo. Foi planeado para o governante Johann Georg como um caminho de equitação e caça que conduzia do seu palácio ao Tiergarten. No século XVIII, Frederico, o Grande, que governou a Prússia de 1740 a 1786, transformou a rua numa magnífica avenida. Encontrará a sua grande estátua (ele sentado num cavalo) um pouco mais à frente, mesmo no meio da rua. Frederico, o Grande, era uma personalidade muito contraditória. Por um lado, seguia a filosofia do iluminismo e valorizava a educação e a cultura. Fundou escolas, apoiou as artes e convidou pensadores famosos, como Voltaire, para a sua corte. Promoveu também a tolerância religiosa, permitiu que pessoas de diferentes credos praticassem livremente a sua religião e aboliu a tortura. Por outro lado, promoveu a militarização da Prússia, travou três guerras pela Silésia e juntou-se às fileiras das grandes potências europeias da época (juntamente com a França, a Grã-Bretanha, a Áustria e a Rússia) através da sua participação na Guerra dos Sete Anos de 1756-1763. Juntamente com a Áustria e a Rússia, iniciou, sem escrúpulos, a divisão e destruição da Polónia.",
      lat: 52.516057,
      lon: 13.375529,
      url: "https://pixabay.com/de/photos/berlino-unter-den-linden-1439724/",
      img: "unter_den_linden",
      location: "https://maps.app.goo.gl/25ECAoNkSvvtEWR77"
    },
    {
      name: "6. O Palácio de Berlim/ hoje Fórum Humboldt",
      short: "",
      info: "Durante a Segunda Guerra Mundial, o Palácio de Berlim foi fortemente danificado pelos bombardeamentos dos Aliados. Após a guerra, o palácio foi instalado em Berlim Oriental. O governo da Alemanha de Leste decidiu demolir o palácio em ruínas em 1950, considerando-o um símbolo do poder imperial e prussiano. No seu lugar, o governo da Alemanha de Leste construiu o Palast der Republik (Palácio da República), que serviu de parlamento da RDA e de centro cultural. Este edifício foi posteriormente encerrado e demolido devido ao amianto com que foi construído. Após a reunificação da Alemanha, foi tomada a decisão de reconstruir o Palácio de Berlim. A reconstrução começou em 2013, utilizando fotografias antigas e planos para recriar o seu aspeto histórico. O palácio reconstruído, concluído em 2020, é agora conhecido como o Fórum Humboldt. Funciona como museu e centro cultural, exibindo arte e exposições interactivas de todo o mundo.",
      lat: 52.518393,
      lon: 13.398499,
      url: "https://pixabay.com/de/photos/humboldt-forum-berlino-3873897/",
      img: "humboldt_forum",
      location: "https://maps.app.goo.gl/H6nNmkNFKQTaAmc76"
    },
    {
      name: "7. O Museu Histórico Alemão (“Das Deutsche Historische Museum”)",
      short: "",
      info: "Foi inicialmente construído como um arsenal de armas no início do século XVIII. Mais tarde, no século XIX, tornou-se o Museu do Exército Real Prussiano. No século XX, foi utilizado pelos nazis para exposições que apoiavam a ideologia e os objectivos dos nacional-socialistas. Após a Segunda Guerra Mundial, foi utilizado pelo governo da Alemanha de Leste como museu central da história socialista na RDA. Com a reunificação alemã, em 1990, o Museu Histórico Alemão, fundado três anos antes em Berlim Ocidental, tomou conta do edifício e das suas colecções.",
      lat: 52.516651,
      lon: 13.388361,
      url: "https://pixabay.com/de/photos/museo-della-storia-berlino-3895714/",
      img: "deutsches_historisches_museum",
      location: "https://maps.app.goo.gl/UHJx7KCvfLDtFq6o6"
    },
    {
      name: "8. Nova Guarda",
      short: "",
      info: "Este edifício relativamente pequeno situa-se mesmo ao lado do arsenal, que alberga atualmente o Museu Histórico Alemão. Foi construído entre 1816 e 1818 com base em projectos de Karl Friedrich Schinkel e tornou-se, em 1993, o memorial central da República Federal da Alemanha para as vítimas da guerra e da tirania. No interior, uma “chama eterna” arde sobre urnas que contêm os restos mortais de um prisioneiro desconhecido de um campo de concentração e de um soldado desconhecido. A escultura “Mãe com o filho morto” (“Pieta”) de Käthe Kollwitz encontra-se no interior desde 1993.",
      lat: 52.516649,
      lon: 13.387226,
      url: "https://pixabay.com/de/photos/denkmal-nuova-wache-berlino-3895717/",
      img: "neue_wache",
      location: "https://maps.app.goo.gl/rpYPwUB5x1fiMv1P8"
    },
    {
      name: "9. Ópera Estatal de Berlim",
      short: "",
      info: "A Ópera Estatal de Berlim foi fundada pelo governante Frederico, o Grande, da Prússia. O seu objetivo era ser um centro de ópera e ballet.",
      lat: 52.515155,
      lon: 13.380670,
      url: "https://pixabay.com/de/photos/teatro-dell-opera-di-berlino-3388481/",
      img: "staatsoper_berlin",
      location: "https://maps.app.goo.gl/nDD1Ai2cq42yZjXj7"
    },
    {
      name: "10. Universidade de Humboldt",
      short: "",
      info: "Em 1949, a maior e mais antiga universidade de Berlim recebeu o nome dos académicos universais Wilhelm e Alexander von Humboldt. A sua sede situa-se no antigo palácio do Príncipe Heinrich (irmão de Frederico, o Grande).",
      lat: 52.516072,
      lon: 13.388582,
      url: "https://pixabay.com/de/photos/universit%C3%A0-humboldt-berlino-4501749/",
      img: "humboldt_universitaet",
      location: "https://maps.app.goo.gl/xTYaYhRVodmqv7hi6"
    },
    {
      name: "11. Bebelplatz",
      short: "",
      info: "No chão, encontra-se um memorial de Micha Ullman dedicado à queima de livros em 10 de maio de 1933, no local onde os nazis levaram a cabo um terrível ritual em plena cidade. No centro da Bebelplatz, o chão abre-se. Os transeuntes podem olhar através de uma vidraça para uma sala branca e vazia com prateleiras que outrora albergavam livros. O regime nazi queimava livros para doutrinar as universidades com a sua ideologia. Apenas três meses após a chegada de Hitler ao poder, os incêndios tinham como objetivo mostrar que a “Revolução Nacional Socialista” não pouparia escritores e autores. O escritor nazi Hanns Johst afirmou mais tarde que a revolução também não se iria ficar pelas mesas dos escritores. Antes, a União dos Estudantes Alemães tinha apelado às universidades para que se mobilizassem contra o “espírito judaico de subversão”. Foram publicadas listas de livros proibidos, por exemplo, livros de Heinrich Mann, Erich Kästner, Erich Maria Remarque, Lion Feuchtwanger, Kurt Tucholsky, Sigmund Freud, etc., foram rotulados de “imorais” e “decadentes”.",
      lat: 52.516076,
      lon: 13.388747,
      url: "https://pixabay.com/de/photos/bebelplatz-berlino-1848073/",
      img: "bebelplatz",
      location: "https://maps.app.goo.gl/4y56CPHTs9GepmMM7"
    },
    {
      name: "12. Friedrichstrasse",
      short: "",
      info: "A Friedrichstraße é uma das ruas mais famosas do centro histórico de Berlim e foi baptizada com o nome do Eleitor Frederico III de Brandeburgo, que se tornou o primeiro rei prussiano em 1701, Frederico I, “Rei na Prússia”. No início do século XX, o cruzamento com a avenida Unter den Linden tornou-se num dos mais movimentados da cidade. Inúmeras carruagens puxadas por cavalos, táxis, veículos motorizados, carrinhos de mão, autocarros, ciclistas e peões partilhavam a rua.",
      lat: 52.516406,
      lon: 13.387928,
      url: "https://pixabay.com/de/photos/friedrichstra%C3%9Fe-berlino-2817997/",
      img: "friedrichstrasse",
      location: "https://maps.app.goo.gl/JjHiv6f8d2ub3m8P7"
    },
    {
      name: "13. Hotel Adlon",
      short: "",
      info: "Foi reaberto em 1997 e segue a tradição do Hotel Adlon original, que abriu em 1907 e foi gravemente destruído em 1945.",
      lat: 52.519200,
      lon: 13.390255,
      url: "https://pixabay.com/de/photos/hotel-adlon-berlino-3626269/",
      img: "hotel_adlon",
      location: "https://maps.app.goo.gl/BTm31HVp6LDgyyzd8"
    },
    {
      name: "14. O Portão de Brandemburgo",
      short: "",
      info: "Foi encomendado pelo rei Frederico Guilherme II da Prússia e concebido pelo arquiteto Carl Gotthard Langhans. O portão foi construído em estilo clássico e tem 26 metros de altura. Foi originalmente construído como um símbolo de paz. A Quadriga, uma carruagem puxada por quatro cavalos, é conduzida por Eirene, a deusa da paz. Em 1806, quando Napoleão conquistou Berlim, levou a Quadriga e a estátua no topo do portão para Paris. Depois de Napoleão ter sido derrotado em 1814, a Quadriga foi devolvida a Berlim e colocada de novo no portão. Após a Segunda Guerra Mundial e a divisão de Berlim, o Portão de Brandemburgo ficou mesmo ao lado do Muro de Berlim e tornou-se um símbolo da divisão da Alemanha. Quando o Muro de Berlim caiu em 1989, o portão tornou-se um símbolo da reunificação da Alemanha. Os edifícios a oeste da Porta de Brandeburgo já não fazem parte da parte histórica de Berlim, ou seja, da Berlim anterior a 1750. O antigo sector de Berlim controlado pelos americanos (1945-1990) começa no Portão de Brandemburgo.",
      lat: 52.516275,
      lon: 13.377705,
      url: "https://pixabay.com/de/photos/porta-di-brandeburgo-berlino-3895711/",
      img: "brandenburger_tor",
      location: "https://maps.app.goo.gl/K68U5gbDBTTdJbDe8"
    },
    {
      name: "15. Memorial aos Judeus Assassinados da Europa",
      short: "",
      info: "O memorial foi concebido por Peter Eisenman e é composto por 2711 estelas cubóides de betão que cobrem uma área total de 19.000 metros quadrados. Está aberto ao público desde 12 de maio de 2005 e destina-se a recordar aos políticos e à população do centro da cidade os crimes da Alemanha nacional-socialista, para que nunca mais se repitam.",
      lat: 52.514498,
      lon: 13.390563,
      url: "https://pixabay.com/de/photos/memoriale-agli-ebrei-berlino-3654721/",
      img: "memoriale_ebraico",
      location: "https://maps.app.goo.gl/sxyJUYRzT3ZNDqu8A"
    },
    {
      name: "16. Reichstag (Parlamento alemão)",
      short: "",
      info: "Com a proclamação do Império Alemão em 1871, Berlim tornou-se a capital imperial. O recém-formado parlamento precisava agora de uma sede. Desde 1990, o edifício do Reichstag é a sede do Parlamento Federal alemão. O edifício do Reichstag está associado a importantes momentos e acontecimentos da história alemã. Em 9 de novembro de 1918, o político do SPD Philipp Scheidemann proclamou a República a partir da varanda do portal oeste. Na noite de 27 de fevereiro de 1933, ocorreu o “incêndio do Reichstag”. A sala do plenário e a cúpula foram completamente destruídas. Uma bandeira vermelha da União Soviética, hasteada por dois soldados do Exército Vermelho em 30 de abril de 1945, simbolizava a vitória sobre o “Terceiro Reich”.",
      lat: 52.518611,
      lon: 13.376111,
      url: "https://pixabay.com/de/photos/reichstag-berlino-3184601/",
      img: "reichstag",
      location: "https://maps.app.goo.gl/6oP4rZ4ARW4A4ucZ7"
    },
    {
      name: "17. Tiergarten",
      short: "",
      info: "O Tiergarten já foi objeto de várias transformações. No final do século XVII, o Eleitor Friedrich III mandou transformar os antigos terrenos de caça num “parque de lazer para a população”. Ao longo do tempo, o parque foi redesenhado de acordo com vários modelos, incluindo a transformação do Tiergarten num parque público inglês em meados do século XIX. O último ano da Segunda Guerra Mundial, em particular, foi catastrófico para o parque. Após a guerra, o parque foi quase completamente despojado pelos berlinenses que procuravam lenha. A reflorestação do parque começou em 1949 e, nessa altura, quase só podia ser efectuada com doações de árvores de outras cidades alemãs.",
      lat: 52.516507,
      lon: 13.350493,
      url: "https://pixabay.com/de/photos/tiergarten-berlino-2879701/",
      img: "tiergarten",
      location: "https://maps.app.goo.gl/r8zYEj2tK79peA1R7"
    },
    {
      name: "18. Coluna da Vitória",
      short: "",
      info: "A Coluna da Vitória na Großer Stern, no Großer Tiergarten, é um dos monumentos nacionais mais importantes da Alemanha e um dos pontos turísticos mais importantes de Berlim. Construída entre 1864 e 1873 para comemorar as Guerras da Unificação, foi transferida para a sua localização atual em 1939. Originalmente, situava-se em frente ao Reichstag.",
      lat: 52.514471,
      lon: 13.350422,
      url: "https://pixabay.com/de/photos/vittoria-berlino-1869254/",
      img: "colonna_vittoria",
      location: "https://maps.app.goo.gl/PTKmofmEzNXaz3yy8"
    }
  ],
};

export default sights;
