// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.astro'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // 선언되었지만 사용되지 않는 변수를 감지합니다.
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // 콘솔 사용을 감지합니다.
    'no-console': 'warn',

    // var 대신 let/const 사용 강제
    'no-var': 'error',

    // 일관된 들여쓰기 강제 (2칸)
    indent: ['error', 2],

    // 세미콜론 사용 강제
    semi: ['error', 'always'],

    // 비교 연산자에서 === 사용 강제 (== 사용 금지)
    eqeqeq: ['error', 'always'],

    // 강제 const
    'prefer-const': 'off',

    // 블록 앞에 공백 강제
    'space-before-blocks': ['error', 'always'],

    // 최대 빈 줄 제한
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // 주석 앞에 공백 강제
    'spaced-comment': ['error', 'always'],

    // 함수, 변수 선언 전 공백 줄 강제
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
    ],

    // 불필요한 삼항 연산자 사용 금지
    'no-unneeded-ternary': 'error',

    // 복잡한 표현식에 괄호 강제
    'no-mixed-operators': 'error',

    // 선언되지 않은 변수 사용 금지
    'no-use-before-define': ['error', { functions: false }],

    // 상수 표현식 조건문 금지
    'no-constant-condition': 'error',

    // 중첩된 삼항 연산자 금지
    'no-nested-ternary': 'error',

    // 최대 복잡도 제한
    complexity: ['warn', 10],

    // 불필요한 else 구문 방지
    'no-else-return': 'warn',

    // 중복 케이스 라벨 금지
    'no-duplicate-case': 'error',

    // 정규식에서 특수 문자 이스케이프 강제
    'no-useless-escape': 'error',

    // 인라인 주석 스타일
    'line-comment-position': ['warn', { position: 'above' }],

    // 일관된 반환 강제
    'consistent-return': 'error',

    // 브라켓 스타일 강제
    'brace-style': ['error', '1tbs'],

    // 함수 파라미터 재할당 금지
    'no-param-reassign': 'warn',

    // 선언된 변수만 수정 가능
    'no-undef-init': 'error',

    // 불필요한 return await 금지
    'no-return-await': 'error',

    // Promise 거부 시 에러 객체 사용 권장
    'prefer-promise-reject-errors': 'warn',

    // any 타입 사용 시 경고 표시
    '@typescript-eslint/no-explicit-any': 'warn',

    // 암시적 any 타입 사용 시 경고 표시
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
  },
  overrides: [
    {
      // Astro 파일에 대한 설정 추가
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      rules: {
        // Astro 파일에서는 일부 규칙 비활성화
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    {
      // .js, .jsx 파일에 대한 설정
      files: ['*.js', '*.jsx'],
      rules: {
        // JavaScript 파일에서는 @typescript-eslint 규칙 중 일부만 적용
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    {
      // .ts, .tsx 파일에 대한 설정
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript 파일에 대해서는 모든 @typescript-eslint 규칙 적용
        // JavaScript 파일에서는 @typescript-eslint 규칙 중 일부만 적용
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
  ignorePatterns: [
    'dist/**/*.js',
    'node_modules',
    '.eslintrc.cjs',
    '.astro/**',
    'astro.config.mjs',
  ],
};
