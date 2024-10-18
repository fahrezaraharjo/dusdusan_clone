import LinkButton from '@/components/common/LinkButton';
import { MenarikArticle } from '@/interfaces/interfaces';
import React from 'react';
import Image from 'next/image';

interface MenarikUntukDisimakProps {
    articles: MenarikArticle[];
}

const MenarikUntukDisimak: React.FC<MenarikUntukDisimakProps> = ({ articles }) => {
    return (
        <div className="category-wrapper w-full bg-white mb-4 pb-0">
            <div className="bar flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                    <Image
                        src="/assets/tumbup.svg"
                        alt="Menarik Icon"
                        quality={64}
                        className='mr-2.5'
                        priority={false}
                        width={22}
                        height={22}
                    />
                    <div className="text-lg font-semibold">Menarik untuk disimak</div>
                </div>
                <LinkButton text="Lihat lebih banyak" href="/komunitas/artikel" variant="orange" />
            </div>
            <div className="article-list grid grid-cols-1 gap-3 px-4">
                {articles.map((article) => (
                    <div key={article.id} className="article-row flex mb-3">
                        <div className="wrapper w-1/3">
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                width={300}
                                height={200}
                                className="rounded-md object-cover"
                                quality={64}
                                priority={false}
                                layout="responsive"
                            />
                        </div>
                        <div className="flex flex-col justify-between w-2/3 pl-3">
                            <div>
                                <div className="article-category-title text-xs text-orange-500">{article.category}</div>
                                <div className="article-title text-sm font-semibold line-clamp-2">{article.title}</div>
                            </div>
                            <div className="text-[14px] font-semibold text-[#ffad00] mt-1">{article.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenarikUntukDisimak;
