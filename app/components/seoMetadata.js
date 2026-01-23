const seoMetadata = {
    home: {
      title: 'Tshidiso Modiko | Full-Stack Developer',
      description: 'Savour culinary brilliance with unparalleled views of Joburg. Book your table now for an unforgettable dining experience.',
      openGraph: {
        title: 'Executive Chef | Kyle Marshall',
        description: 'Savour culinary brilliance',
        url: 'https://www.kylemarshall.co.za',
        type: 'website',
        images: [
          {
            url: 'https://cdn.the11thfloor.co.za/img/misc/The-11Th-Floor-Devni.jpg',
            width: 1200,
            height: 630,
            alt: 'Chef Kyle Marshall',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Executive Chef | Kyle Marshall',
        description: 'Savour culinary brilliance',
        images: ['https://cdn.the11thfloor.co.za/img/misc/The-11Th-Floor-Devni.jpg'],
      },
    },
  
    // Add more pages here:
    about: {
      title: 'About Chef Kyle Marshall',
      description: `Discover Chef Kyle's story, and his journey to culinary excellence.`,
    },
    signatureDishes: {
      title: 'Signature Dishes | Chef Kyle Marshall',
      description: `Discover Chef Kyle Marshall's renowned signature dishes, crafted with bold flavours, precision, and exceptional presentation.`,
    },
    gallery: {
      title: 'Gallery | Chef Kyle Marshall',
      description: `A visual showcase of Chef Kyle Marshall's dishes, events, and signature presentations.`,
    },
    contact: {
      title: 'Contact Us | Chef Kyle Marshall',
      description: 'Get in touch with Chef Kyle Marshall.',
    },
  };
  
  export default seoMetadata;