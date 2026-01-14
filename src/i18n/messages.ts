const en = {
  layout: {
    page: {
      title: 'Meow Mapping',
      difficulty: {
        title: 'Difficulty',
        easy: { description: 'Easy' },
        medium: { description: 'Medium' },
        hard: { description: 'Hard' }
      },
      feeding: {
        title: 'Feeding',
        true: { description: 'Yes' },
        false: { description: 'No' }
      },
      visited: {
        title: 'Visited'
      },
      updated: {
        title: 'Updated'
      }
    }
  },
  abstract: {
    transportation: {
      from: {
        prefix: 'from '
      }
    },
    tableOfContent: {
      title: 'Contents'
    }
  }
};

const tw = {
  layout: {
    page: {
      title: '找貓點',
      difficulty: {
        title: '難度',
        easy: { description: '簡單' },
        medium: { description: '中等' },
        hard: { description: '困難' }
      },
      feeding: {
        title: '可以餵食？',
        true: { description: '可以' },
        false: { description: '不可以' }
      },
      visited: {
        title: '造訪時間'
      },
      updated: {
        title: '更新'
      }
    }
  },
  abstract: {
    transportation: {
      from: {
        prefix: '從',
        affix: '出發'
      }
    },
    tableOfContent: {
      title: '內容'
    }
  }
};

const messages = {
  en,
  tw
};

export default messages;
