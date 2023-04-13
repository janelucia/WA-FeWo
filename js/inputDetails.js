const inputDetails = {
  emojiMapper: {
    characteristics: {
      type: '🏠',
      city: '🌆',
      max_guest: '🧑',
      min_night: '💤',
      beds: '🛏️',
      bathrooms: '🛁',
    },
  },
  fewos: [
    {
      id: 1,
      name: 'Ferienwohnung auf Sylt',
      characteristics: {
        type: 'Strandhütte',
        city: 'Sylt',
        max_guest: 'max. 5 Gäste',
        min_night: 'min. 3 Nächte',
        beds: '3 Betten',
        bathrooms: '2 Badezimmer',
      },
      price_night: 55,
      description:
        'Das Ferienhaus auf Sylt ist ein gemütliches Haus in idyllischer Lage am Ufer der Nordsee. Es verfügt über drei Schlafzimmer, eine voll ausgestattete Küche, ein Wohnzimmer mit Kamin und eine Terrasse mit herrlichem Blick auf das Meer. Die Einrichtung ist modern und komfortabel, so dass Sie sich wie zu Hause fühlen werden.',
      host: {
        name: 'Sarah Fischer',
        origin: 'De',
        answer_time: 5,
        img: 'https://images.unsplash.com/photo-1658632302262-957f74b1fdd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Frau sitzt auf einem Sessel',
      },
      features: {
        kitchen:
          'Küche: voll ausgestattete Küche mit Kühlschrank, Herd, Backofen, Mikrowelle, Geschirrspüler und Kochutensilien.',
        bathroom:
          'Badezimmer: 2 Badezimmer mit WC, Waschbecken, Dusche und Handtüchern Wohnbereich: Sofa, Sessel, Tisch, TV und Kamin.',
        livingroom: 'Wohnbereich: Sofa, Sessel, Tisch, TV und Kamin.',
        bedroom:
          'Schlafzimmer: 3 Schlafzimmer mit Doppelbetten, Schränken, Nachttischen und Bettwäsche.',
        terrasse: 'Terrasse: möblierte Terrasse mit Blick auf den Garten.',
        grill: 'Grillmöglichkeiten: Grillplatz im Garten.',
        wlan: 'WLAN: kostenfreies WLAN im gesamten Haus.',
        pets: 'Haustiere erlaubt: kleine Haustiere erlaubt.',
      },
      reviews: {
        review_num: 27,
        review_text: {
          first: {
            author: 'Hannah Bauer',
            text: 'Ein wunderschönes Ferienhaus mit atemberaubendem Blick auf das Meer. Wir haben uns hier sehr wohl gefühlt und können es nur empfehlen!',
            stars: 5,
          },
          second: {
            author: 'Luisa Keller',
            text: 'Das Ferienhaus war sehr sauber und gepflegt. Die Ausstattung ließ keine Wünsche offen und der Blick auf das Meer war einfach traumhaft.',
            stars: 4,
          },
          third: {
            author: 'Johannes Wohlers',
            text: 'Wir hatten einen tollen Aufenthalt im Ferienhaus. Die Lage ist einzigartig und die Ausstattung ist top. Wir kommen gerne wieder!',
            stars: 5,
          },
        },
      },
      img: 'https://www.dansk.de/media/dzdg3aqt/ferienhaus-sus12-0227-001.jpg?rxy=0.4179052607010677,0.60796633573241377&width=576&height=320&rnd=132785854224070000',
      alt: 'Ferienwohnung auf Sylt',
    },
    {
      id: 2,
      name: 'Ferienwohnung auf Amrum',
      characteristics: {
        type: 'Wohnung',
        city: 'Amrum',
        max_guest: 'max. 2 Gäste',
        min_night: 'min. 1 Nächte',
        beds: '1 Betten',
        bathrooms: '1 Badezimmer',
      },
      price_night: 45,
      description:
        'Das Ferienhaus auf Amrum ist ein charmantes Haus an der Nordsee mit einer atemberaubenden Aussicht auf die umliegende Landschaft. Es verfügt über ein Schlafzimmer, eine offene Küche und ein geräumiges Wohnzimmer mit Kamin. Die Einrichtung ist rustikal und gemütlich, so dass Sie sich wie in einer Berghütte fühlen werden.',
      host: {
        name: 'Lena Schulz',
        origin: 'De',
        answer_time: 10,
        img: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Frau slided einen Computer in ihren Backpack.',
      },
      features: {
        kitchen:
          'Küche: voll ausgestattete Küche mit Kühlschrank, Herd, Backofen, Mikrowelle, Geschirrspüler und Geschirr.',
        bathroom: 'Badezimmer: 1 Badezimmer mit WC, Waschbecken und Dusche.',
        livingroom: 'Wohnbereich: Sofa, Sessel, Tisch, TV und DVD-Player.',
        bedroom:
          'Schlafzimmer: 1 Schlafzimmer mit Doppelbetten, Schränken, Nachttischen und Bettwäsche.',
        terrasse: 'Terrasse: möblierte Terrasse mit Blick auf den Garten.',
        freetime:
          'Freizeitaktivitäten: Fahrräder und Kanus können gemietet werden.',
        wlan: 'WLAN: kostenfreies WLAN im gesamten Haus.',
        pets: 'Haustiere erlaubt: kleine Haustiere erlaubt.',
      },
      reviews: {
        review_num: 38,
        review_text: {
          first: {
            author: 'Nico Müller',
            text: 'Das Ferienhaus ist ein echtes Juwel in am Meer. Die Aussicht ist unvergesslich und die Einrichtung ist sehr gemütlich. Wir haben unseren Aufenthalt hier sehr genossen',
            stars: 5,
          },
          second: {
            author: 'Laura Meier',
            text: 'Die Lage des Ferienhauses ist perfekt für alle, die die Natur lieben. Die Einrichtung ist rustikal und gemütlich und die Betten sind sehr bequem.',
            stars: 4,
          },
          third: {
            author: 'Felix Schmitt',
            text: 'Wir haben unseren Aufenthalt im Ferienhaus auf Amrum sehr genossen. Die Aussicht war atemberaubend und die Einrichtung war sehr schön. Wir würden auf jeden Fall wiederkommen.',
            stars: 5,
          },
        },
      },
      img: 'https://www.novasol.de/sites/default/files/styles/body_large/public/inline-images/dsh455_main_05_olpenitz_2.jpg?itok=ck5k-YSA',
      alt: 'Ferienwohnung auf Amrum',
    },
    {
      id: 3,
      name: 'Ferienhaus auf Föhr',
      characteristics: {
        type: 'Strandhaus',
        city: 'Föhr',
        max_guest: 'max. 10 Gäste',
        min_night: 'min. 2 Nächte',
        beds: '6 Betten',
        bathrooms: '3 Badezimmer',
      },
      price_night: 50,
      description:
        'Das Ferienhaus auf Föhr ist ein modernes Haus direkt am Strand gelegen. Es verfügt über sechs Schlafzimmer, eine offene Küche und ein helles Wohnzimmer mit Blick auf das Meer. Die Einrichtung ist minimalistisch und elegant, so dass Sie sich wie in einem stylischen Beach-Haus fühlen werden.',
      host: {
        name: 'Jonas Becker',
        origin: 'De',
        answer_time: 20,
        img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Mann mit lockigen Haaren',
      },
      features: {
        kitchen: 'Voll ausgestattete Küche mit Geschirrspüler und Mikrowelle.',
        bathroom: 'Ein Badezimmer mit Dusche und Badewanne.',
        livingroom: 'Ein geräumiger Wohnbereich mit Sofa und TV.',
        terrasse: 'Eine möblierte Terrasse mit Blick auf den Garten.',
        sauna: 'Keine Sauna verfügbar.',
        wlan: 'Kostenloses WLAN im ganzen Haus verfügbar.',
        pets: 'Keine Haustiere erlaubt.',
      },
      reviews: {
        review_num: 23,
        review_text: {
          first: {
            author: 'Simon Lehmann',
            text: 'Das Strandhaus ist ein Traum! Die Lage direkt am Meer ist unvergesslich und die Einrichtung ist sehr stilvoll. Wir hatten einen wunderbaren Aufenthalt hier.',
            stars: 5,
          },
          second: {
            author: 'Lisa Schmidt',
            text: 'Das Ferienhaus war sehr sauber und gepflegt. Die Einrichtung war modern und minimalistisch, was uns sehr gut gefallen hat. Wir würden jederzeit wiederkommen.',
            stars: 4,
          },
        },
      },
      img: 'https://www.holidayextras.com/de/images/hx-bootstrap/ferienhaus-an-der-ostsee.jpeg',
      alt: 'Haus am Strand mit einem Boot im Vordergrund',
    },
    {
      id: 4,
      name: 'Ferienhaus auf Pellworm',
      characteristics: {
        type: 'Strandhaus',
        city: 'Pellworm',
        max_guest: 'max. 4 Gäste',
        min_night: 'min. 2 Nächte',
        beds: '2 Betten',
        bathrooms: '2 Badezimmer',
      },
      price_night: 43,
      description:
        'Das gemütliche Ferienhaus liegt direkt am Strand und bietet Platz für bis zu 4 Personen. Es verfügt über eine voll ausgestattete Küche, ein Badezimmer und einen Wohnbereich mit Meerblick. Auf der Terrasse kann man die Sonne genießen und den Blick auf das Meer genießen.',
      host: {
        name: 'Jan Müller',
        origin: 'De',
        answer_time: 2,
        img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Mann schaut etwas verwirrt in die Kamera',
      },
      features: {
        kitchen: 'Offene Küche mit modernen Geräten und Essbereich.',
        bathroom: 'Zwei Badezimmer, eines mit Dusche und eines mit Badewanne.',
        livingroom:
          'Ein komfortables Wohnzimmer mit Kamin und Zugang zur Terrasse.',
        terrasse: 'Eine große Terrasse mit Gartenmöbeln und Blick auf den See.',
        sauna: 'Private Sauna im Badezimmer.',
        wlan: 'Schnelles WLAN im ganzen Haus verfügbar.',
        pets: 'Haustiere sind auf Anfrage erlaubt.',
      },
      reviews: {
        review_num: 19,
        review_text: {
          first: {
            author: 'Lukas Weber',
            text: 'Ein traumhaftes Ferienhaus direkt am Strand! Die Aussicht ist atemberaubend und das Haus hat alles, was man braucht. Wir haben unseren Aufenthalt hier sehr genossen.',
            stars: 4,
          },
          second: {
            author: 'Sophia Wagner',
            text: 'Die Lage ist einfach perfekt. Wir haben die Terrasse geliebt und die Sonnenuntergänge waren unglaublich. Wir können das Ferienhaus nur empfehlen!',
            stars: 4,
          },
        },
      },
      img: 'https://www.urlaubstracker.de/wp-content/uploads/2020/05/strandhaus-la-vela-front.jpg',
      alt: 'Blaues Feirenhaus mit Strandkorb',
    },
    {
      id: 5,
      name: 'Ferienwohnung auf Nordstrand',
      characteristics: {
        type: 'Wohnung',
        city: 'Nordstrand',
        max_guest: 'max. 2 Gäste',
        min_night: 'min. 1 Nächte',
        beds: '2 Betten',
        bathrooms: '1 Badezimmer',
      },
      price_night: 52,
      description:
        'Dieses geräumige Ferienhaus bietet Platz für bis zu 2 Personen und verfügt über 1 Schlafzimmer, 1 Badezimmer und einen großzügigen Wohnbereich mit Kamin. Die voll ausgestattete Küche lädt zum Kochen ein und auf der Terrasse kann man den Blick auf das nahegelegenen Meer genießen.',
      host: {
        name: 'Jessica Some',
        origin: 'De',
        answer_time: 30,
        img: 'https://plus.unsplash.com/premium_photo-1679439492688-9d8fea1dd0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Frau mit hippiger Brille guckt weg',
      },
      features: {
        kitchen:
          'Moderne Küche mit Granitarbeitsplatte und hochwertigen Geräten.',
        bathroom:
          'Zwei Badezimmer, eines mit Badewanne und das andere mit Dusche.',
        livingroom:
          'Ein stilvoller Wohnbereich mit großem Sofa, Essbereich und Flachbild-TV.',
        terrasse:
          'Eine große überdachte Terrasse mit Gartenmöbeln und Blick auf den Pool.',
        sauna: 'Private Sauna im Haus vorhanden.',
        wlan: 'Schnelles WLAN im gesamten Haus verfügbar.',
        pets: 'Haustiere sind erlaubt. Es gibt eine Gebühr von 20€ pro Nacht und Tier.',
      },
      reviews: {
        review_num: 42,
        review_text: {
          first: {
            author: 'Leonie Fischer',
            text: 'Ein tolles Ferienhaus in einer wunderschönen Umgebung. Die Ausstattung ist top und der Kamin sorgt für eine gemütliche Atmosphäre. Wir kommen gerne wieder!',
            stars: 4,
          },
          second: {
            author: 'David Berger',
            text: 'Das Ferienhaus hat unsere Erwartungen übertroffen. Alles war sauber und ordentlich und die Küche hatte alles, was wir brauchten. Die Terrasse mit Blick auf das Meer war einfach traumhaft.',
            stars: 5,
          },
        },
      },
      img: 'https://online-reiseziele.de/sites/default/files/styles/regartfirst/public/images-regionen/24/urlaubsregion-reisebericht-nordstrand-004.jpg?itok=FoCuAaAt',
      alt: 'Hafen mit Häusern im Hintergrund',
    },
  ],
};
