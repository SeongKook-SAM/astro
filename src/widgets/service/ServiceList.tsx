import { useEffect, useState } from 'react';

interface DataList {
  name: string;
  url: string;
}

interface resType {
  count: number;
  next: string;
  previous: string;
  results: DataList[];
}

export const ServiceList = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [listData, setListData] = useState<DataList[]>([]);
  const [paramsData, setParamsData] = useState({
    limit: 10,
    offset: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    if (!isLogin) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${paramsData.limit}&offset=${paramsData.offset}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        // 응답 처리
        if (response.ok) {
          setIsLoading(false);
          const data = (await response.json()) as resType;

          setListData(data.results);
        } else {
          alert(`API 요청 실패: ${response.status}`);
        }
      } catch (error) {
        alert(`API 요청 중 오류 발생: ${error}`);
      }
    };

    fetchData();
  }, [isLogin, paramsData]);

  return (
    <section className={'px-[12.5%] mt-[200px]'}>
      {isLogin ? (
        <>
          {isLoading && <div>로딩중...</div>}
          {!isLoading && (
            <>
              <div className="c-flex">
                {listData.map((item) => (
                  <div key={item.name}>{item.name}</div>
                ))}
              </div>
              <button
                type="button"
                className="cursor-pointer bg-blue-300 mt-4"
                onClick={() => {
                  {
                    setIsLoading(true);
                    setParamsData({
                      limit: paramsData.limit + 10,
                      offset: paramsData.offset + 10,
                    });
                  }
                }}
              >
                더 보기
              </button>
            </>
          )}
        </>
      ) : (
        <div>로그인 후 사용해주세요~</div>
      )}
    </section>
  );
};

export default ServiceList;
