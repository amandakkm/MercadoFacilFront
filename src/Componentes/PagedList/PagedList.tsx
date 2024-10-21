import React, { useEffect, useState } from 'react';
import Share from "../ShareCards/Share";
import './PagedList.css'

const PagedList: React.FC = () => {
    const [shares, setShares] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [resultsPerPage] = useState(5); // 6 resultados por página

    // Funções para navegar entre as páginas
    const handleNext = () => {
        if ((page * resultsPerPage) < shares.length) { // Verifica se há mais páginas
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrev = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1)); // Não permite ir para a página 0
    };

    useEffect(() => {
        // Definindo as informações manualmente
        const manualShares = [
            {
                logoUrl: 'https://logo.clearbit.com/vale.com',
                longName: 'Vale S.A.',
                symbol: 'VALE3',
                regularMarketPrice: 67.50,
            },
            {
                logoUrl: 'https://logo.clearbit.com/petrobras.com.br',
                longName: 'Petrobras',
                symbol: 'PETR4',
                regularMarketPrice: 29.20,
            },
            {
                logoUrl: 'https://logo.clearbit.com/itau.com.br',
                longName: 'Itaú Unibanco Holding S.A.',
                symbol: 'ITUB4',
                regularMarketPrice: 25.10,
            },
            {
                logoUrl: 'https://logo.clearbit.com/tesla.com',
                longName: 'Tesla, Inc.',
                symbol: 'TSLA',
                regularMarketPrice: 780.20,
            },
            {
                logoUrl: 'https://logo.clearbit.com/apple.com',
                longName: 'Apple Inc.',
                symbol: 'AAPL',
                regularMarketPrice: 145.85,
            },
            {
                logoUrl: 'https://logo.clearbit.com/microsoft.com',
                longName: 'Microsoft Corporation',
                symbol: 'MSFT',
                regularMarketPrice: 302.50,
            }
        ];
        
        setShares(manualShares); // Define os dados manualmente
    }, []); // A dependência deve ser um array vazio

    // Calcular o índice de início e fim com base na página atual
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentShares = shares.slice(startIndex, endIndex); // Itens da página atual

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {currentShares.length > 0 ? (
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row">
                                {currentShares.map((share, index) => (
                                    <div className="col-4 card-spacing" key={index}>
                                        <Share 
                                            logoUrl={share.logoUrl} 
                                            longName={share.longName} 
                                            symbol={share.symbol} 
                                            regularMarketPrice={share.regularMarketPrice} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>Carregando ações...</p>
                    )}
                </div>

                {/* Botões de navegação */}
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#carouselExampleInterval" 
                    data-bs-slide="prev"
                    onClick={handlePrev} 
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#carouselExampleInterval" 
                    data-bs-slide="next"
                    onClick={handleNext} 
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default PagedList;




