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
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      host: {
        name: 'Katha Who',
        origin: 'De',
        answer_time: 5,
        img: 'https://images.unsplash.com/photo-1658632302262-957f74b1fdd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Frau sitzt auf einem Sessel',
      },
      features: {
        beach: 'Haus am Strand',
        alone: 'Haus für sich',
        pool: 'Pool vorhanden',
      },
      reviews: {
        review_num: 27,
        review_text: {
          first:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          second:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          third:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
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
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      host: {
        name: 'Ola When',
        origin: 'De',
        answer_time: 10,
        img: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Frau slided einen Computer in ihren Backpack.',
      },
      features: {
        beach: 'Haus am Strand',
        locals: 'Haus geteilt mit anderen',
        pool: 'Pool vorhanden',
      },
      reviews: {
        review_num: 38,
        review_text: {
          first:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          second:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          third:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
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
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      host: {
        name: 'Michael Knows',
        origin: 'De',
        answer_time: 20,
        img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Mann mit lockigen Haaren',
      },
      features: {
        beach: 'Haus am Strand',
        alone: 'Haus für sich',
        pool: 'Pool vorhanden',
      },
      reviews: {
        review_num: 23,
        review_text: {
          first:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          second:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          third:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
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
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      host: {
        name: 'Daniel What',
        origin: 'De',
        answer_time: 2,
        img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Mann schaut etwas verwirrt in die Kamera',
      },
      features: {
        beach: 'Haus am Strand',
        alone: 'Haus für sich',
        pool: 'Pool vorhanden',
      },
      reviews: {
        review_num: 19,
        review_text: {
          first:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          second:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          third:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
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
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      host: {
        name: 'Jessica Some',
        origin: 'De',
        answer_time: 30,
        img: 'https://plus.unsplash.com/premium_photo-1679439492688-9d8fea1dd0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Frau mit hippiger Brille guckt weg',
      },
      features: {
        beach: 'Haus am Strand',
        locals: 'Haus geteilt mit anderen',
        pool: 'Pool vorhanden',
      },
      reviews: {
        review_num: 42,
        review_text: {
          first:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          second:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          third:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
        },
      },
      img: 'https://online-reiseziele.de/sites/default/files/styles/regartfirst/public/images-regionen/24/urlaubsregion-reisebericht-nordstrand-004.jpg?itok=FoCuAaAt',
      alt: 'Hafen mit Häusern im Hintergrund',
    },
  ],
};
