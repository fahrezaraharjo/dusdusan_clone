"use client";

import React from 'react';
import LinkButton from '@/components/common/LinkButton';
import { MenarikArticle } from '@/interfaces/interfaces';
import Image from 'next/image';

const MenarikUntukDisimak: React.FC<{ articles: MenarikArticle[] }> = ({ articles }) => {
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
                    <ArticleRow key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

const ArticleRow: React.FC<{ article: MenarikArticle }> = React.memo(({ article }) => {
    // Utility function to format the date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options).replace('.', '');
    };

    return (
        <div className="article-row flex mb-3">
            <div className="wrapper w-1/3">
                <Image
                    src={article.imagePath}
                    alt={article.name}
                    width={300}
                    height={200}
                    className="rounded-md object-cover"
                    quality={64}
                    priority={false}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL="/path/to/your/placeholder-image.png"
                />
            </div>
            <div className="flex flex-col justify-between w-2/3 pl-3">
                <div>
                    <div className="article-category-title text-xs text-orange-500">{article.category.categoryName}</div>
                    <div className="article-title text-sm font-semibold line-clamp-2">{article.name}</div>
                </div>
                <div className="text-[14px] font-semibold text-[#ffad00] mt-1">
                    {formatDate(article.publishDate)}
                </div>
            </div>
        </div>
    );
});

ArticleRow.displayName = 'ArticleRow';

export default MenarikUntukDisimak;
