'use client';
import { useState } from 'react';

interface PriceFilterProps {
    min: number;
    max: number;
    onChange: (range: [number, number]) => void;
}

const PriceFilter = ({ min, max, onChange }: PriceFilterProps) => {
    const [range, setRange] = useState<[number, number]>([min, max]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setRange([val, range[1]]);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setRange([range[0], val]);
    };

    const applyFilter = () => {
        onChange(range);
    };

    return (
        <div className="mb-10">
            <h3 className="text-[18px] font-bold mb-6 text-[#111111] uppercase tracking-wider">Cena</h3>
            <div className="space-y-6">
                <div className="relative h-1 bg-gray-200 rounded-full">
                    <div
                        className="absolute h-full bg-black rounded-full"
                        style={{
                            left: `${(range[0] / max) * 100}%`,
                            right: `${100 - (range[1] / max) * 100}%`
                        }}
                    />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                        <label className="text-[12px] text-gray-400 uppercase mb-1 block">Od</label>
                        <div className="flex items-center border border-gray-200 px-3 py-2 rounded-sm bg-white">
                            <input
                                type="number"
                                value={range[0]}
                                onChange={handleMinChange}
                                className="w-full text-[14px] outline-none"
                            />
                            <span className="text-[14px] ml-1 text-gray-500">Kč</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <label className="text-[12px] text-gray-400 uppercase mb-1 block">Do</label>
                        <div className="flex items-center border border-gray-200 px-3 py-2 rounded-sm bg-white">
                            <input
                                type="number"
                                value={range[1]}
                                onChange={handleMaxChange}
                                className="w-full text-[14px] outline-none"
                            />
                            <span className="text-[14px] ml-1 text-gray-500">Kč</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={applyFilter}
                    className="w-full py-3 bg-black text-white text-[13px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                    Filtr produktů
                </button>
            </div>
        </div>
    );
};

export default PriceFilter;
