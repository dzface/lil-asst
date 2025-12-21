import { writeFileSync, copyFileSync } from 'fs';
import { resolve } from 'path';

const docsPath = resolve(process.cwd(), 'docs');

// .nojekyll 파일 생성 (빈 파일)
writeFileSync(resolve(docsPath, '.nojekyll'), '');

// CNAME 파일 복사 (루트에 CNAME 파일이 있다고 가정)
copyFileSync(resolve(process.cwd(), 'CNAME'), resolve(docsPath, 'CNAME'));

console.log('.nojekyll and CNAME files copied to docs');