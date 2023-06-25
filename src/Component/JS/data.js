export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  export const writers = [
    {
      id: 1,
      imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAv3gfVcdhPFgrXLod4R9EqQLkPFBKxQ4iiVUlDs8H5_ycUaL7C8JCrjfrDaIyWM_qw5s&usqp=CAU",
      name:"J.K. Rowling",
      description:"J.K. Rowling is the author of the Harry Potter series, which has sold over 500 million copies worldwide. She is also the author of the Fantastic Beasts and Where to Find Them series, which has been adapted into a movie franchise."
    },
    {
      id: 2,
      imageurl: "data:image/jpeg;base64,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",
      name:"Stephen King",
      description:"Stephen King is an American author of horror, fantasy, and suspense novels. He has written over 60 books, including The Shining, Carrie, It, and Misery. King's books have sold over 350 million copies worldwide and have been adapted into numerous films and television series."
    },
    {
      id: 3,
      imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHpgMUiR_o7zZUlwLJDn5zz5oyMJzZs3z7w&usqp=CAU",
      name:"George R.R. Martin",
      description:"George R.R. Martin is an American author of fantasy novels. He is best known for the A Song of Ice and Fire series, which has been adapted into the popular HBO series Game of Thrones."
    },
    {
      id: 4,
      imageurl: "https://prh.imgix.net/articles/paulo-coelho-q-and-a_hero.jpg",
      name:"Paulo Coelho",
      description:"Paulo Coelho is a Brazilian lyricist and novelist. He is best known for his international best-selling novel The Alchemist. Coelho's books have sold over 100 million copies worldwide and have been translated into over 80 languages."
    },
    {
      id: 5,
      imageurl: "https://th-i.thgim.com/public/incoming/cvsj9j/article65299536.ece/alternates/FREE_1200/Kalki_Krishnamurthi.jpg",
      name:"Kalki Krishnamurthy",
      description:"Kalki R Krishnamurthy (1899-1954) was an iconic writer, a pioneer of modem Tamil literature and journalism. His induction into journalism was facilitated by his involvement with the freedom struggle."
    },
    {
      id: 6,
      imageurl: "https://thelondonmagazine.org/wp-content/uploads/2022/03/Gabriel_Garcia_Marquez-785x400-1.jpg",
      name:"Gabriel García Márquez",
      description:"Gabriel García Márquez was a Colombian novelist, journalist, and short story writer. He is best known for his novel One Hundred Years of Solitude, which is considered one of the greatest works of 20th-century literature."
    },
    {
      id: 7,
      imageurl: "https://api.time.com/wp-content/uploads/2016/02/harper-lee3.jpeg",
      name:"Harper Lee",
      description:"Harper Lee was an American novelist. She is best known for her Pulitzer Prize-winning novel To Kill a Mockingbird."
    },
    {
      id: 8,
      imageurl: "https://media.npr.org/assets/artslife/arts/2010/11/mark-twain/mark-twain-6fa45e42400eea8cac3953cb267d66a33825a370-s1100-c50.jpg",
      name:"Mark Twain",
      description:"Mark Twain was an American author and humorist. He is best known for his novels The Adventures of Tom Sawyer and The Adventures of Huckleberry Finn. "
    },
    {
      id: 9,
      imageurl: "https://cdn.britannica.com/71/215371-138-9B7E88C6/Top-questions-answers-Jane-Austen.jpg?w=800&h=450&c=crop",
      name:"Jane Austen",
      description:"Jane Austen was an English novelist. She is best known for her six major novels, which are considered classics of English literature. Austen was born in Steventon, Hampshire, England, and studied at home."
    },
    {
      id: 10,
      imageurl: "https://www.frontlist.in/storage/uploads/2021/06/Charles-Dickens-1.jpg",
      name:"Charles Dickens",
      description:"Charles Dickens was an English novelist. He is best known for his novels Oliver Twist, A Christmas Carol, and David Copperfield. Dickens was born in Portsmouth, England, and worked as a lawyer's clerk before becoming a journalist."
    }

  ]