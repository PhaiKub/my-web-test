let themeIndex = 0;

const themes = [
  {
    bgImage: 'image/0/1082406.png',
    imageUrl: '',
    headerColor: '#131111',
    buttonColor: '#131111', // สีปุ่มปกติ
    buttonHoverColor: '#0000cc', // สีปุ่มเมื่อ hover
    fontColor: '#ffff',
    message: "Hi! Welcome to my website. This is where I'll be testing some new features and ideas."
  },

  {
    bgImage: 'image/1/1bd.png',
    imageUrl: 'image/1/1ma.png',
    headerColor: '#1a2530',
    buttonColor: '#1a2530', // สีปุ่มปกติ
    buttonHoverColor: '#CC3333', // สีปุ่มเมื่อ hover
    fontColor: '',
    message: ''
  },

  {
    bgImage: 'image/2/2bg.png',
    imageUrl: 'image/2/2ma.png',
    headerColor: '#8cbce4',
    buttonColor: '#8cbce4', // สีปุ่มปกติ
    buttonHoverColor: '#fc84bc', // สีปุ่มเมื่อ hover
    fontColor: '#00ffaa',
    message: ''
  },

  {
    bgImage: 'image/3/3bg.jpg',
    imageUrl: 'image/3/3ma.jpeg',
    headerColor: '#B03060',
    buttonColor: '#B03060', // สีปุ่มปกติ
    buttonHoverColor: '#9b59b6', // สีปุ่มเมื่อ hover
    fontColor: '#ffffff',
    message: ''
  },

  {
    bgImage: 'image/4/4bg.jpeg',
    imageUrl: 'image/4/4ma.png',
    headerColor: '#EEC591',
    buttonColor: '#EEC591', // สีปุ่มปกติ
    buttonHoverColor: '#9b59b6', // สีปุ่มเมื่อ hover
    fontColor: '#ffffff',
    message: ''
  },

  {
    bgImage: 'image/5/5bg.jpg',
    imageUrl: 'image/5/5ma.jpg',
    headerColor: '#6b5e54',
    buttonColor: '#6b5e54',
    buttonHoverColor: '#e4dccc', // สีปุ่มเมื่อ hover
    fontColor: '#ffffff',
    message: ''
  },

  {
    bgImage: 'images/bg3.jpg',
    imageUrl: 'images/main3.jpg',
    headerColor: '#8e44ad',
    buttonColor: '#8e44ad', // สีปุ่มปกติ
    buttonHoverColor: '#9b59b6', // สีปุ่มเมื่อ hover
    fontColor: '#ffffff',
    message: 'ธีมที่ 3: สนุกสนานและสดใส ให้คุณเติมพลัง!'
  },

  // ... (เพิ่มเติมธีมอื่นๆ ตามที่คุณต้องการ)
];

function changeTheme(index) {
  themeIndex = index;

  const theme = themes[themeIndex];

  // เปลี่ยนพื้นหลัง
  document.body.style.backgroundImage = `url('${theme.bgImage}')`;

  // เปลี่ยนรูปตรงกลาง
  document.getElementById('main-image').src = theme.imageUrl;

  // เปลี่ยนสีของ Header
  document.querySelector('header').style.backgroundColor = theme.headerColor;

  // เปลี่ยนสีของปุ่มใน navbar ตอนปกติและ hover
  const buttonColor = theme.buttonColor;
  const buttonHoverColor = theme.buttonHoverColor;
  const buttons = document.querySelectorAll('.navbar button');

  // เปลี่ยนสีปุ่มปกติ
  buttons.forEach(button => {
    button.style.backgroundColor = buttonColor; // เปลี่ยนสีปุ่มปกติ
    button.addEventListener('mouseover', function() {
      button.style.backgroundColor = buttonHoverColor; // เปลี่ยนสีเมื่อ hover
    });

    button.addEventListener('mouseout', function() {
      button.style.backgroundColor = buttonColor; // คืนค่าสีเดิมเมื่อไม่ได้ hover
    });
  });

  // ✅ เปลี่ยนข้อความฝั่งซ้าย และสีฟอนต์
  const textElement = document.getElementById('theme-text');
  textElement.textContent = theme.message;
  textElement.style.color = theme.fontColor;
}
