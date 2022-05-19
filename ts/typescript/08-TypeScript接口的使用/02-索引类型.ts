// 通过 interface 来定义索引类型
interface IndexLanguage {
    [index: number]: string
}

const frontLanguage: IndexLanguage = {
    0: 'JavaScript',
    1: 'HTML',
    2: 'CSS',
    3: 'Vue'
}

interface IndexLnaguaeYear {
    [str: string]: number
}

const languageYear: IndexLnaguaeYear = {
    'c': 1972,
    'Java': 1995,
    'JavaScript': 1996,
    // 1232: '12313'
}

