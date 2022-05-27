new fullpage("#fullpage", {
  licenseKey: "29D22B9D-244C4C74-87A11080-BE68FCC1",
  normalScrollElements: ".modelbox__content",
});

var cities = document.getElementsByClassName("cities");
var cityName = document.getElementById("cityName");
var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playAudio");

for (var i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", function (e) {
    console.log(dataset[this.id]);
    for (var j = 0; j < cities.length; j++) {
      cities[j].style.display = "none";
    }
    this.style.display = "block";
    cityName.innerHTML = this.id;
    stateName.innerHTML = dataset[this.id]["state"];
    audio.src =
      "https://dsventures.github.io/sounds-of-azaan/sound/" + this.id + ".mp3";
    document.getElementsByClassName("modelbox__content")[0].innerHTML =
      dataset[this.id]["desc"];
    document.getElementsByClassName("audio__cover")[0].innerHTML =
      "<img src='https://dsventures.github.io/sounds-of-azaan/img/urdu/" +
      this.id +
      "-01.png' style='width:100%' />";
    document.getElementById("indiaMap").style.transform =
      dataset[this.id]["zoom"];
    document.getElementsByClassName("modelbox")[0].style.display = "block";
    playPause();
  });
}
document.getElementById("closeBtn").addEventListener("click", function () {
  for (var j = 0; j < cities.length; j++) {
    cities[j].style.display = "block";
  }
  document.getElementsByClassName("modelbox")[0].style.display = "none";
  document.getElementById("indiaMap").style.transform =
    "scale(1) translate(0, 0)";
  stop();
});

var count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else {
    count = 0;
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;";
  }
}
function stop() {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.innerHTML = "&#9658;";
  count = 0;
}

var progressed = document.getElementById("progressed");

audio.ontimeupdate = function () {
  // console.log("playing", (100 * audio.currentTime) / audio.duration);
  progressed.style.width = (100 * audio.currentTime) / audio.duration + "%";
};

var dataset = {
  Hyderabad: {
    state: "Telangana",
    zoom: "scale(2.5) translate(-25px, -58px)",
    desc: '<p>"Come to prayer. Rise up to your welfare!" And in the last hours of darkness just before dawn: "Come to prayer. Rise up to your welfare. For prayer is better than sleep." The iftaar siren rings loud, it\'s time to break the fast. While the ones who were fasting grab a quick bite and rush to offer the evening prayer when they hear the azaan, a few wait for the azaan, to pray before they break their fast.</p><p>The entire office, a mixed bunch of 20-something year olds, waits eagerly for the maghrib azaan as well. You must wonder why. A girl at work waits until both the siren and the azaan are heard before she breaks her fast. A few colleagues wait until she finishes praying so all of them could eat together. Meanwhile, the boys quickly run to pray. There is usually a sense of urgency around. One would see a bubble of men rushing inside a mosque as soon as they hear the azaan. The late comers join in eventually. Once done, the same bubble of men comes out. One would then find some of them catching up with familiar faces, or you would find them discussing politics or how inflation is affecting even the price of chai in the city.</p>',
  },
  Mumbai: {
    state: "Maharashtra",
    zoom: "scale(2) translate(28px, -58px)",
    desc: "<p>Having grown up in Byculla with a masjid right behind my home, the azaan was a regular feature of my morning before-school routine, afternoon tuitions, and an alarm that playtime had ended during the evenings.</p><p>Now, having moved away from my ancestral home, the prayer-call brings me back to the silence of Byculla during namaaz and a visceral visual of my family as they break their fast around the thaal during Ramzan. The quietness is peppered with sounds of domesticity. A light clanking of vessels as iftaar is prepared, footsteps through the kitchen, a parallel prayer call in the distance — a heightening of everyday noises as the city around it pauses.</p><p>Silence in a place like Bombay — or in my home for that matter — is such an anomaly. But during those three minutes, as the azaan resounds through my neighbourhood, chaos stands still — often metaphorically, internally, and subconsciously.</p><p>In a metropolis of 20 million people, it's comforting to know that while some may consider the azaan as white noise, or ambient sound amidst the cacophony; for a percentage of the population, it means remembering the Almighty, the end of a working day, a call to pause and self-reflect, the end of a long fast, or a memory. One of warmth, and togetherness, at a time when we seem to have forgotten both.</p>",
  },
  Lucknow: {
    state: "Uttar Pradesh",
    zoom: "scale(2) translate(-58px, 7px)",
    desc: "<p>is shahr-e-ḳhuftgāñ meñ koī to azaan de aisā na ho zamīñ kā javāb āsmān de </p><p>Himayat Ali Shayar' sher tells us how azaan keeps a human settlement alive. I grew up in a mosque compound. The muezzins of this mosque kept changing. It was earlier Achchan Dada. A tall, thin, man with the whitest beard I have ever seen who would softly whisper into the microphone. When there was a power cut, he would step out into the 'sehen' , put both his hands on his ears and give the azaan. Then came Raju, who made a few errors here and there, but his sincerity was incredible during Ramzan. Neither of them is now alive. The baton has been passed on. The azaan for the day is given by these two young boys alternatively and that of the morning by Huzuri chacha. I love Huzuri chacha's azaan. It is the shortest. When as children we kept rozas and had to break the fast after azaan, we would impatiently pray that Huzuri chacha gives the azaan, cause his azaan was the shortest! Very unlike Izhar sahab's, long and loud, as if he was giving it in my own house. When he was ill and couldn't come to the mosques, we missed his voice. I remember the day when we heard him again on Fajr and felt a sense of relief and familiarity and knew that he is finally ok. That somehow became the parameter. When I lived in Pune, far away from home. I had to wrap my head around a new routine according to the clock cause mine was according to the azaan!</p><p>I would stand in the balcony at the meeting of times, at maghrib, and force my ears to be able to hear even one word of azaan that the wind might have carried on its palm. My heart craved to hear that sound. I felt un-belonged and alone but that sound just made me feel at home. The sound of home is the sound of azaan. I wish there weren't attacks on this sense of home. y morning was interspersed with azaan and a distant sound of a Bhajan. I share the wind that carried these sounds with people from all religions that lived in my area. I wish my friends who aren't Muslims but have memories of azaan that they keep sharing with me at different points, tell us and share. I have a lot to say, but, I want to listen to their stories now. The sky and the wind is shared. I hope my friends fight to let us keep our share.</p>",
  },
  Ahmedabad: {
    state: "Gujarat",
    zoom: "scale(2) translate(35px, 8px)",
    desc: "<p>I am born and bred in Ahmedabad. Then the city was very different; I grew up at a time when Hindus and Muslims lived in harmony. While my friends would observe fast with me during Ramzaan, I would also celebrate Diwali, Holi, Navratri with equal vigour. Today so much has changed, or at least that's what we are made to believe. But, I am sure that kinship and brotherhood is still intact deep within our hearts irrespective of the physical distance.</p><p>This year, when the whole uproar over the azaan played on loudspeakers was at its high, I began to wonder how something as pure as the azaan could become a point of contention. The idea of the azaan is just to pass on the message of prayer, of namaaz. There is no underlying intent of disrespecting anyone, and those who do it with malice will only face the wrath of Allah. Azaan is a token of love, devotion, and nothing else. That's why I thought of bringing out that side of my city through Sidi Saiyyed Mosque, one of Ahmedabad's oldest mosques known across the world for its intricate 'jaali' (mesh) design. The mosque is situated right at the heart of the city. When the azaan is performed, anyone passing through the area can hear it and head to their homes for namaaz. The sound is not loud; it just mixes with the other ambient sounds and forms the soundscape that my city is known for - the sound of love.</p>",
  },
  Srinagar: {
    state: "Jammu and Kashmir",
    zoom: "scale(2) translate(4px, 72px)",
    desc: "<p>The Doppler effect can be seen nowhere better than on an evening Srinagar road around the time of the Maghreb prayers. Those heading home, buzz past empty streets. If one didn't know better, one would imagine a desolation was underway. The scarce few who are out on the roads around the time of the evening prayer, bear witness to the last cars heading home — cars which have the air of rushed-last-cars about them. The call to prayer begins from one mosque to another, and then from a hundred mosques all at once.</p><p>During the month of Ramzan/Ramadan, the loudspeakers compete for the sound of the prayer. Like a Venn diagram with subsets trying to overlay each other, sounds from different mosques overlap into competitively larger concentric circles. As one drives through downtown Srinagar, one never goes a second without hearing it. </p><p>A faint mumble from a distant loudspeaker turns into a loud whisper and then a blaring chant as you move closer; and then back to a faint whisper, only muffled by the sound of the next loudspeaker directly ahead, or directly behind, or literally anywhere around you. Technically, one is always floating in a sea of azaan coming from all the corners of the city. With the people and their cars having headed home, a footstep in the distance echoes across the bare-brick walls of old city buildings and hits you in the face like a flush of air. Everyone is home just in time for iftaar. or they are seen trying. One prefers to make the last drive home, finding empty roads and prayers coming from every mosque in the valley.</p><p>At the effervescent Dal, the silence of the downtown twilight is filled with the sounds of lapping waves of water, hurried pedestrian walks, and resonating azaan bouncing over the otherwise still waters of the Dal, set into motion only by the gush of early evening winds.</p>",
  },
  Guwahati: {
    state: "Assam",
    zoom: "scale(2.5) translate(-142px, 8px)",
    desc: "<p>I'm Mehnaz, from Guwahati. The 'azaan' — or as most people call it, the 'adhaan' — is an Islamic way of calling or recitation that is delivered by a \"Khadim\" of a mosque, with the purpose of initiating and inviting Muslims for the obligatory prayers or to perform the namaz, five times a day.</p><p>The on-going debate which bans loudspeakers to deliver the calling has been the subject of controversy, since the azaan has been termed as 'noise pollution'. That isn't what I wish to swell on, however. I want to discuss how it has helped me and society.</p><p>Azaan has been an instrument of balance or communal harmony in my society. I remember the time as a child, when I used to visit my grandmother's house at Algapur, an interior village then. So during azaan, all the kids and adults of the village would get ready to go to the mosque for the fazr or dawn break prayer.</p><p>It has immensely helped to instill the commitment and devotion towards the Almighty. The call reminds us that people, especially Muslims, are mandated to remember the Almighty not just during their bad days, but also in their good times. As I grew up, I felt that azaan also helped the society in enhancing its time to devotion. I usually saw people in my neighborhood wake up to azaan as an alarm or wake up call, quite literally, and move towards their respective religious places. The sound of azaan and the ringing bells in temples of my neighbourhood sounded serene, like promoting unity and coexistence of religions in sacred patterns.</p><p>I'm a woman so I'm not allowed to go for the Friday prayers. But I see my parents and all the male members of the society going, it is always a delight to watch, especially the synchronisation of the crowd to offer namaz. Also, during Ramadan, azaan becomes mandatory minimum for a practicing Muslim like me. I feel glad that I have the privilege of associating myself to the daily offerings to the Almighty through azaan.</p><p>Instead of calling it a noise pollutant, I would rather people respected it like our standard timekeepers. After all, it is a wake-up call towards devotion.</p>",
  },
  Jaipur: {
    state: "Rajasthan",
    zoom: "scale(2) translate(9px, 8px)",
    desc: '<p>I have spent my growing up years in several parts of this country, however, a major share of my childhood was spent in Fatehpur Shekhawati where there were many a mosque and whenever I would hear the azaan I would wonder where does the sound come from. I would sometimes think maybe someone plays a CD player every day. But one day when I went to a nearby mosque to offer iftaar, I noticed the muezzin performing the azaan in front of a box.</p><p>It is one of those two azaans that I will never forget in my life. After I came to Jaipur, the nearby mosque didn\'t have enough means to afford a muezzin, hence the duty of rendering the azaan lay on the shoulders of Bhuriya bhai. His house was right next to the mosque and since he worked from home he would easily perform the azaan on time. One day, I noticed he was asking around if there was someone who could take care of the azaan for a day as he had to step out for some work. I raised my hand and as he saw that he said, "Ah! Have you ever performed the azaan before, young boy?" When I nodded in denial he began to teach me the correct way of rendering the azaan and gave some very insightful lessons on the diction.</p><p>And then, the day finally arrived when I performed the azaan for the first time. It was the month of Ramzaan and I said on the mic, "It\'s time for iftaar, kindly break the fast," and then I began with the azaan. There were many houses near the mosque, and slowly one could hear all the sounds — from the kitchens, of the kids — fading away as the azaan resounded through the neighbourhood. As I was walking back home, in my head I found the answer to my first question: Who performs the azaan?</p>',
  },
  Delhi: {
    state: "Union Territory",
    zoom: "scale(2) translate(-15px, 67px)",
    desc: "<p>A very prominent feature about the place where I live is its closeness to a local mosque. I get to hear the azaan echoing through our neighbourhood five times a day. The call to prayer reverberates through the surroundings, enveloping everyone nearby in its soul-stirring sound. People going about their business, children playing in the park, cars stuck in the traffic jam, vendors walking on the streets — it reaches them all equally, perhaps reminding us that we are all indeed one.</p><p>As I went to Chandni Chowk this Ramzan, I stood observing the Sunehri Masjid and the beautiful Gurudwara Sis Ganj Sahib located close by. At the time of dusk, I heard the azaan issuing forth from the mosque with soothing hymns of the gurbani being sung at the gurudwara. The calming ambience created by the twin spiritual reminders leaves its mark on everyone around. Muslims hurry to pray. Sikhs enter the gurudwara to join in the kirtan. People of different faiths peacefully intermingle, help one another, share daily struggles and even pray together.</p><p>Coexisting with harmony can be seen not only in the two places of worship standing tall next to one another, but also in the effect it has on people here. Near the gurudwara, people feed the poor, hungry travellers, passers-by, young and old, rich and poor, whoever joins the queue. What brings people together here is their common humanity. Nobody will ask your name or where you are from. They will help you because you are in the precincts of the House of God, before whom all are equal, be it that rickshaw puller down the lane, the person on the street, or the worshippers at the mosque and the gurudwara.</p><p>The azaan and gurbani contain the message of God being great. What God calls you toward is greater than what you are involved in. Leave your divisions behind and come to stand united before your Lord. Detach yourselves from worldly concerns for some time, seek forgiveness for your wrongs, pray for that person you may have harmed intentionally or unintentionally and invite God's blessings on humanity.</p><p>The call to God instills a sense of peace. It turns us away from petty issues and refocuses our mind on what is important.</p>",
  },
  Kolkata: {
    state: "West Bengal",
    zoom: "scale(2.5) translate(-124px, -23px)",
    desc: "<p>Two names, same state, different experiences, yet both living under the same communal harmony and serenity dome. Murshidabad, sparkling in the dull noon of the day which was once the capital of Bengal sits alongside of the Ganges river where the banks are fringed by the Kash flowers, mango orchards and palm trees and on the other side Kolkata, which is currently the capital of Bengal, sits like a jewel on the banks of the Hooghly river, casting the glitters of the city lights during the night.</p><p>I hear the sound of azaan, as I open a large muted green shuttered painted window, peeking through the wrought iron grills.</p><p>Dusk is at the doorstep and the sky glows, the city is at its peak, the doors of local shops have opened after a long afternoon nap unlike the big shops which keep on staring at the highways. From time to time, one can spot a tram crossing by the road, or hand-pulled rickshaws navigating through the narrow colonial-era lanes. Diyas are lit near tulsi plants on verandahs, and the shankha (conch) is sounded to mark the evening.</p><p>The conch can be heard from a distance while the maulana continues to vocalise the azaan. Some men can be seen walking towards the mosque while others rush out from their shops towards home to break their fast. Kothai cholle? (Where are you going?) A call comes out from a local tea shop where men are busy having intellectual debates to idly gossiping about everyday life over endless cups of tea.</p><p>In a city like Kolkata, one is in constant conversation, sometimes with people and sometimes with sounds like the azaan and aarti.</p>",
  },
  Murshidabad: {
    state: "West Bengal",
    zoom: "scale(2.5) translate(-77px, -23px)",
    desc: "<p>If you travel towards the north-eastern side of Bengal, you will be welcomed by a different set of experiences in Murshidabad, a backdrop to the ruins of the Nawabs of Bengal.</p><p>Murshidabad, where driving onto a dirt track off the highway brings the fragrance of flowers from the mango orchard, which in turn is situated alongside the Ganga, where the ghats breathe deeply, and silence dives along the ripples from fishermen boats.</p><p>Children can be seen returning home from the playground while mothers prepare the last batch of pakoras for iftar. As I chew on a neem stick, I see someone or the other walking with a cloth-covered thali towards the masjid, to give Maulana Saheb the iftaari during this Ramzan month every evening.</p><p>A silence prevails before the azaan, as all gather and sit around the iftar table patiently waiting for the azaan. Everyone takes their first bite of date as the first line of the azaan is recited.</p><p>Night descends as the azaan ends, to the chirping of birds, and the purposeful steps of children who take long strides as they climb the stairs towards terraces to look at the sky and a few early stars.</p>",
  },
  Kochi: {
    state: "Kerala",
    zoom: "scale(2.5) translate(41px, -131px)",
    desc: "<p>Subahi, Duhar, Azhar, Maghrib, Isha — five prayers at specific times. Five times familiar to the people of the world. Every schedule of Baanku/Adhan, it reminds Muslims and invites them to pray. Baanku/Adhan is something that people remember beyond religious beliefs. It is an undeniable fact that in a place like Kochi, where people of different religions, cultures and faiths are intertwined, the value of the Baanku/Adhan is immense. But why the thought? </p><p>We are surrounded by people who are engaged in different jobs and follow different customs and think that every moment is very important. For believers, the call to prayer reminds them of their prayer time, and for some it is the beginning of a day. For some it is a sign of the times and for others it is a reminder. </p><p>The call to action arises from the thought of what should be done to remind people of the prayer time. The Prophet commissioned Bilal bin Rabah, an Ethiopian slave, to call the first Baanku/Adhan in history. Really a blow to the racist views of the society. That is why every Baanku/Adhan is a hope for the future of the working people.</p><p>Every Baanku/Adhan we hear is also a reminder of the Prophet's declaration that no one should be enslaved. Adhan/Baanku reach the ears of those who work at sea and along the seashores as reminders. It's one that cannot be avoided. Lakes, seas, mountains and meadows always sound like a reminder in every nook and corner of Kochi. The times of prayer are spread throughout the day so that worshippers are able to continually maintain their connection to God.</p><p>In a way, all these are reminders of Allah...</p>",
  },
  Chennai: {
    state: "Tamil Nadu",
    zoom: "scale(2.5) translate(-26px, -131px)",
    desc: "<p>Being a small town kid, azaan was part of my everyday life while growing up. It's the wake up alarm for every household. You could see the men going to the mosque very early and the women praying at the house. My grandmother used to drag me out of the bed to perform the morning prayer.</p><p>The moment we hear the sound of the azaan, everyone at home stops talking and sits quietly till it's completed. I remember all the shop owners would close down the shop for the Friday prayers in my hometown, Tenkasi.</p><p>When Ramadan comes, it's even more special. My whole family would talk, play games between the shehri (food taken before fasting commences) and the first prayer of the day. And when it's time for iftar, all of us sit together to break fast, before praying. </p><p>After moving to Chennai, I hardly had the chance to hear the call of azaan in my neighbourhood, unlike my hometown. I was once driving down the main road, when I saw a big mosque and the azaan was playing — but life was moving for everyone. The sound of the azaan was interspersed with that of the traffic, honking and the general cacophony of a city. A completely different setting compared to what I was used to, growing up. </p><p>It was almost like a message: that life keeps moving. During Ramzan this year, I went to a nearby street with a mosque, and spotted a child wearing a cap as he was getting snacks and walking with his mom for the evening iftar. It was pure nostalgia for me.</p>",
  },
  Tenkasi: {
    state: "Tamil Nadu",
    zoom: "scale(2.5) translate(-26px, -131px)",
    desc: "<p>Being a small town kid, azaan was part of my everyday life while growing up. It's the wake up alarm for every household. You could see the men going to the mosque very early and the women praying at the house. My grandmother used to drag me out of the bed to perform the morning prayer.</p><p>The moment we hear the sound of the azaan, everyone at home stops talking and sits quietly till it's completed. I remember all the shop owners would close down the shop for the Friday prayers in my hometown, Tenkasi.</p><p>When Ramadan comes, it's even more special. My whole family would talk, play games between the shehri (food taken before fasting commences) and the first prayer of the day. And when it's time for iftar, all of us sit together to break fast, before praying. </p><p>After moving to Chennai, I hardly had the chance to hear the call of azaan in my neighbourhood, unlike my hometown. I was once driving down the main road, when I saw a big mosque and the azaan was playing — but life was moving for everyone. The sound of the azaan was interspersed with that of the traffic, honking and the general cacophony of a city. A completely different setting compared to what I was used to, growing up. </p><p>It was almost like a message: that life keeps moving. During Ramzan this year, I went to a nearby street with a mosque, and spotted a child wearing a cap as he was getting snacks and walking with his mom for the evening iftar. It was pure nostalgia for me.</p>",
  },
};
