import React, { useState } from 'react';

const missions = [
    { id: 1, name: "랜드마크에서 사진 찍기", description: "여행지 랜드마크에서 기념 사진 찍기" },
    { id: 2, name: "현지 음식 맛보기", description: "지역 음식을 맛볼 것" },
    { id: 3, name: "기념품 구입", description: "기념품 가게에서 선물 구매하기" }
];

function MissionList() {
    const [showMissions, setShowMissions] = useState(false);

    const handleButtonClick = () => {
        setShowMissions(!showMissions);
    };

    return (
        <div>
            {/* 작은 화살표 버튼 */}
            <button
                onClick={handleButtonClick}
                className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded-r hover:bg-blue-700 z-10"
            >
                {showMissions ? "<<" : "미션 보기"}
            </button>

            {/* 미션 리스트 슬라이드 창 */}
            <div
                className={`fixed top-1/2 left-0 transform -translate-y-1/2 h-auto bg-gray-900 text-white p-4 w-60 transition-transform duration-500 ease-in-out ${
                    showMissions ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <h2 className="text-lg font-bold mb-4">미션 리스트</h2>
                <ul>
                    {missions.map((mission) => (
                        <li key={mission.id} className="p-2 bg-white text-black rounded mb-2">
                            <h3 className="font-semibold">{mission.name}</h3>
                            <p>{mission.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MissionList;
