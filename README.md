# 🍿 Movie-Recommend
<img width="984" alt="스크린샷 2023-09-28 오전 12 35 56" src="https://github.com/Jongwoo0101/Movie-Recommend/assets/96978536/ecd7dc9a-b8d9-4a64-8f33-d4277ca253f3">   

<br /> 


> [45,000편의 영화에 대한 데이터](https://github.com/Jongwoo0101/Movie-Recommend/blob/Jongwoo0101/data/movies_metadata.csv)와 [9,000편의 영화에 700명의 사용자로부터 받은 100,000개의 시청률의 하위 집합 데이터](https://github.com/Jongwoo0101/Movie-Recommend/blob/Jongwoo0101/data/ratings_small.csv)를
>  이용하여 제작한 AI 모델입니다.
>
> [데이터 출처](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset)

<br /> 

# 📝 모델 작업 순서

1. 데이터 불러오기
- pandas 라이브러리를 사용하여 영화 메타 데이터와 영화 평점 데이터를 CSV 파일에서 읽어옵니다.
  
2. 데이터 전처리
- 영화 메타 데이터(meta)에서 필요한 열만 선택하고, 열의 이름을 변경합니다.
- 영화 메타 데이터에서 원래 언어가 영어인 영화만 선택합니다.
- 영화 메타 데이터에서 장르 정보를 JSON 형식에서 파싱하여 리스트로 변환합니다.

3. 데이터 병합
- 영화 평점 데이터(ratings)와 영화 메타 데이터를 영화 ID를 기준으로 병합합니다.
- 사용자-영화 평점 행렬 생성:
- pivot_table 함수를 사용하여 사용자-영화 평점 행렬을 생성합니다.


4. 유사도 계산
- [pearsonR](https://ko.wikipedia.org/wiki/피어슨_상관_계수) 함수를 사용하여 입력 영화와 다른 영화 간의 피어슨 상관계수를 계산합니다. 이를 통해 영화 간의 유사도를 측정합니다.
  
5. 영화 추천
- recommend 함수는 입력 영화와 유사한 영화를 추천합니다.
- 입력 영화와 다른 영화 간의 유사도를 계산하고, 선택적으로 장르 유사도를 고려합니다.
- 추천 결과는 영화 제목, 상관 계수 (유사도), 그리고 장르 정보로 이루어진 리스트로 반환됩니다.
- 추천 결과를 상관 계수가 높은 순서대로 정렬하고, 상위 N개의 영화를 반환합니다.
  
6. 추천 실행
- 코드의 마지막 부분은 사용자 입력 영화에 대한 추천을 수행하고, 결과를 데이터프레임으로 표시합니다.

<br /> 

# 💻 GUI
<img width="360" alt="스크린샷 2023-09-28 오전 12 43 52" src="https://github.com/Jongwoo0101/Movie-Recommend/assets/96978536/6e006c55-4b2e-44ba-84f1-e186bf94042f">
<img width="360" alt="스크린샷 2023-09-28 오전 12 44 07" src="https://github.com/Jongwoo0101/Movie-Recommend/assets/96978536/b81f5770-45b5-4527-9246-b36c19f12bc3">

> [model.ipynb](https://github.com/Jongwoo0101/Movie-Recommend/blob/Jongwoo0101/model.ipynb) 파일에서 이전 셀에 있는 코드를 모두 실행시킨 뒤 12번째 있는 코드 셀을 실행시키면 다음과 같은 화면이 나옵니다❗️

<br /> 

# 🕸️ Web
```
pip install flask
pip install numpy
pip install pandas
pip install json
pip install os
```
웹에서 실행하려면 위와 같은 라이브러리가 요구됩니다.
<br /> 
```
python3 app.py
```
라이브러리를 모두 설치한 뒤 다음 명령어를 터미널에 입력하면 로컬 호스트 5000번 환경이 제공됩니다.
<img width="568" alt="스크린샷 2023-09-28 오전 12 56 46" src="https://github.com/Jongwoo0101/Movie-Recommend/assets/96978536/5e7d7550-3b18-4af5-b1c7-8f13c0f208c4">
<img width="1440" alt="스크린샷 2023-09-28 오전 12 57 16" src="https://github.com/Jongwoo0101/Movie-Recommend/assets/96978536/7a5981b7-4d2c-487d-bc60-b1c3a1e54dba">

<br /> 

# 🔥 Used
<img src="https://img.shields.io/badge/flask-000000?style=flat&logo=flask&logoColor=white"/> <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/numpy-013243?style=flat&logo=numpy&logoColor=white"/> <img src="https://img.shields.io/badge/pandas-150458?style=flat&logo=pandas&logoColor=white"/> <img src="https://img.shields.io/badge/jupyter-F37626?style=flat&logo=jupyter&logoColor=white"/> <img src="https://img.shields.io/badge/kaggle-20BEFF?style=flat&logo=kaggle&logoColor=white"/>











