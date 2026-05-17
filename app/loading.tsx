"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-10">
            <SkeletonTheme baseColor="#2B1A40" highlightColor="#3D2562">
                {/* Skeleton header to mimic title/filters */}
                <div className="flex justify-between items-center mb-8">
                    <Skeleton height={40} width={200} borderRadius={8} />
                    <Skeleton height={40} width={100} borderRadius={8} />
                </div>

                {/* Skeleton grid to mimic video/course cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="flex flex-col h-[320px] rounded-xl overflow-hidden border border-secondary/20 bg-main/50 mb-4">
                            <div className="h-[240px]">
                                <Skeleton height="100%" width="100%" borderRadius={0} />
                            </div>
                            <div className="p-4 h-20 bg-main/60 border-t border-secondary/30 flex items-center justify-center">
                                <Skeleton count={1} height={20} width="80%" className="mx-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </SkeletonTheme>
        </div>
    );
}
