import { ITabsItem } from 'common/components/Tabs/Tabs.helper';
import { IMailData } from './types/mailsData';

export const formatDateToString = (dateString: string): string => {
  const date = new Date(dateString);

  const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${dayOfWeek}, ${day} ${month} ${year}, ${hours}:${minutes}`;
};

export const getSelectedMessageIds = (selectedRows: number[], messages: IMailData[]): number[] => {
  return selectedRows.map((index) => messages[index].id);
};

export const mailTabs: ITabsItem[] = [
  {
    title: 'Входящие',
    type: 'inbox',
    badgeCount: 1,
    hasBadge: true
  },
  {
    title: 'Непрочитанные',
    type: 'unread',
    badgeCount: 2,
    hasBadge: true
  },
  {
    title: 'Отправленные',
    type: 'sent',
    badgeCount: 0,
    hasBadge: true
  }
];

// Mock Data
export const mockData: IMailData[] = [
  {
    id: 1,
    sender: 'John Doe',
    theme: 'Я так понимаю это заголовок темы письма',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nulla sit amet nisi fringilla porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla ipsum, ullamcorper eu egestas vel, sollicitudin sit amet augue. Nam molestie leo eu pretium rhoncus. Nulla at metus pellentesque, feugiat turpis id, placerat massa. Ut id porta neque, ut lobortis augue.\nС уважением Абдулла и команда Хакуна Матата',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Азатов Азат Азатович',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T18:30',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nulla sit amet nisi fringilla porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla ipsum, ullamcorper eu egestas vel, sollicitudin sit amet augue. Nam molestie leo eu pretium rhoncus. Nulla at metus pellentesque, feugiat turpis id, placerat massa. Ut id porta neque, ut lobortis augue.\n \nС уважением Абдулла и команда Хакуна Матата'
      },
      {
        image: 'https://photocasa.ru/uploads/posts/2016-06/1465055358_img_3794-1.jpg',
        name: 'Апсаматова Аки',
        email: 'apsamatovaaki@gmail.com',
        date: '2024-06-05T20:30',
        text: 'Aliquam eget nunc pretium',
        reply: {
          image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
          name: 'Азатов Азат Азатович',
          email: 'azatovaza@gmail.com',
          date: '2024-06-05T18:30',
          text: 'ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
        }
      },
      {
        image: 'https://photocasa.ru/uploads/posts/2016-06/1465055358_img_3794-1.jpg',
        name: 'Апсаматова Аки',
        email: 'apsamatovaaki@gmail.com',
        date: '2024-06-05T18:33',
        text: 'Aliquam eget nunc pretium',
        reply: {
          image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
          name: 'Азатов Азат Азатович',
          email: 'azatovaza@gmail.com',
          date: '2024-06-05T18:30',
          text: 'ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
        }
      }
    ],
    date: '2024-06-05T00:00',
    unread: true,
    pick: false
  },
  {
    id: 2,
    sender: 'You',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    date: '2024-06-09T00:00',
    unread: false,
    pick: true,
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T18:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ]
  },
  {
    id: 3,
    sender: 'Sam Smith',
    theme: 'Пришельцы решили действовать!',
    date: '2024-06-03T00:00',
    unread: false,
    pick: false,
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T20:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ]
  },
  {
    id: 4,
    sender: 'Lora Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T18:34',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-02T00:00',
    unread: false,
    pick: true
  },
  {
    id: 5,
    sender: 'Hanna Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T22:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-06T00:00',
    unread: false,
    pick: true
  },
  {
    id: 6,
    sender: 'You',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T17:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-08T00:00',
    unread: false,
    pick: true
  },
  {
    id: 7,
    sender: 'Sam Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T16:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-09T00:00',
    unread: false,
    pick: false
  },
  {
    id: 8,
    sender: 'Lora Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T20:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-10T00:00',
    unread: false,
    pick: true
  },
  {
    id: 9,
    sender: 'Hanna Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T20:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-15T00:00',
    unread: false,
    pick: true
  },
  {
    id: 10,
    sender: 'Tom Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T18:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-14T00:00',
    unread: false,
    pick: true
  },
  {
    id: 11,
    sender: 'Tom Smith',
    theme: 'Пришельцы решили действовать!',
    text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.',
    mailChain: [
      {
        image: 'https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_960_720.jpg',
        name: 'Jane Smith',
        email: 'azatovaza@gmail.com',
        date: '2024-06-05T18:30',
        text: 'Aliquam eget nunc pretium, ultrices turpis non, iaculis nunc. Morbi fringilla ex eget metus venenatis scelerisque. Donec purus massa, gravida non dignissim eget, pharetra et lorem. Morbi in aliquet mi. Mauris semper tempus dui, sit amet rutrum leo posuere vitae. Proin ultrices nisl sit amet posuere elementum. Nullam gravida fermentum mollis. Ut bibendum neque euismod libero venenatis fermentum. Aliquam non bibendum nibh. Aliquam bibendum feugiat ex, vitae faucibus sem sodales ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo sapien, faucibus sed nulla ut, blandit tempor sem. Nulla congue nisl at dapibus tincidunt. Pellentesque.'
      }
    ],
    date: '2024-06-05T20:30',
    unread: false,
    pick: true
  }
];

export const userMailData = {
  image: 'https://photocasa.ru/uploads/posts/2016-06/1465055358_img_3794-1.jpg',
  name: 'Апсаматова Аки',
  email: 'apsamatovaaki@gmail.com'
};
