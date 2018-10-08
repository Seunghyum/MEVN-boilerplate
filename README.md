# MEVN-bolierplate
## Mongo Express.js Vue.js Node.js Stack bilerplate

### 적용한 주요 라이브러리
- polifill
- vuex
- bootstrap-vue

### 파일구조
- backend : express 백엔드 서버
- frontend : vue.js 프론트 서버
- backup : mongodb에 넣을 초기 데이터

### 배포 방식 : Docker
프론트 서버 : 배포서버에서 nginx가 frontend/dist의 index.html을 바라보게 하면됨. 따라서 프론트서버는 개발서버에서 npm run build한 내용을 푸시 후 배포서버에서 git pull 했을 때 바로 적용됨.
백엔드 서버 : docker-compose build 로 빌드해야 적용됨. 볼륨 설정했기 때문에 빌드 후 데이터 안날라감.

### 커스터마이징 시 유의 사항
- backend/config/index.js 에서 "Production URL"을 실배포할 URL주소 설정할 것.
- frontend/src/plugins/customAxios.js 파일의 "'Production URL'/v1"을 실배포할 URL주소 설정할 것.
- backend/app.js 
```
app.use(session({
  secret: '비밀번호',
```
에서 비밀번호 설정
