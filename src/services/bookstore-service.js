export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'Tom and Jerry Big Book (1992) #2',
      author: 'William Hanna',
      price: 14,
      coverImage: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/700779.jpg'
    },
    {
      id: 4,
      title: 'Муфта, Полботинка и Моховая Борода.',
      author: 'Эно Рауд',
      price: 37,
      coverImage: 'https://s5-goods.ozstatic.by/2000/139/459/10/10459139_0.jpg'
    },{
      id: 5,
      title: 'Программирование для чайников. Как научиться программировать.',
      author: 'Wallace Wang',
      price: 22,
      coverImage: 'https://cdn1.ozone.ru/multimedia/1003244508.jpg'
    },
    {
      id: 6,
      title: 'Самый лучший самоучитель английского языка',
      author: 'Ирина Орлова, Анастасия Петрова',
      price: 41,
      coverImage: 'https://s5-goods.ozstatic.by/2000/938/382/10/10382938_0.jpg'
    },{
      id: 7,
      title: 'Человек-Паук. Майлз Моралес. Крылья ярости',
      author: 'Бритни Моррис',
      price: 15,
      coverImage: 'https://s2-goods.ozstatic.by/2000/182/20/101/101020182_0.jpg'
    },
    {
      id: 8,
      title: 'План-конспект правил дорожного движения 2021/2022',
      author: 'А. Павловский',
      price: 7,
      coverImage: 'https://s3-goods.ozstatic.by/2000/464/686/10/10686464_0.jpg'
    },
    {
      id: 9,
      title: 'Искусство любить',
      author: 'Эрих Фромм',
      price: 8,
      coverImage: 'https://goods.kaypu.com/photo/58746f24384e1f31d813b11a.jpg'
    },
    {
      id: 10,
      title: 'Наруто. Книга 1. Наруто Удзумаки',
      author: 'Масаси Кисимото',
      price: 37,
      coverImage: 'https://s1-goods.ozstatic.by/2000/441/981/10/10981441_0.jpg'
    },{
      id: 11,
      title: 'Маленький принц',
      author: 'Антуан де Сент-Экзюпери',
      price: 28,
      coverImage: 'https://s2-goods.ozstatic.by/2000/652/651/10/10651652_0.jpg'
    },
    {
      id: 12,
      title: '75 задачек на внимание. Умный блокнот',
      author: '-',
      price: 11,
      coverImage: 'https://s4-goods.ozstatic.by/2000/837/469/10/10469837_0.jpg'
    }
  ];

  getBooks() {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (this.data) {
          return resolve(this.data)
        } else {
          const error = new Error('is not data');
          reject(error);
        }
      }, 800)
    }))
  }
}