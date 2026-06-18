<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Driver City Cockpit</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="/socket.io/socket.io.js"></script>
</head>
<body class="bg-slate-950 text-slate-100 h-screen flex flex-col overflow-hidden">
    <header class="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center shadow-lg">
        <div class="flex items-center space-x-4">
            <div class="bg-amber-500 text-slate-950 font-bold px-4 py-1.5 rounded text-xl tracking-widest">DRIVER CITY</div>
            <div class="text-xs text-emerald-400 font-medium">● SERVER LIVE</div>
        </div>
        <div class="flex space-x-3 text-xs">
            <div class="bg-slate-950 px-4 py-1.5 rounded-xl border border-slate-800">Saldo: <span id="wallet-money" class="font-bold text-emerald-400">R$ 0,00</span></div>
            <div class="bg-slate-950 px-4 py-1.5 rounded-xl border border-slate-800">Coins: <span id="wallet-coins" class="text-amber-400 font-bold">0</span> DC</div>
        </div>
    </header>

    <div class="flex-1 flex overflow-hidden">
        <div class="w-2/3 relative bg-slate-950 flex flex-col justify-between p-6">
            <div id="viewport" class="absolute inset-0 bg-slate-900 flex items-center justify-center">
                <div class="text-center">
                    <i id="asset-icon" class="fa-solid fa-car-side text-5xl text-amber-400"></i>
                    <div id="asset-tag" class="text-xs text-slate-400 mt-2 font-mono">PILOTO ACTIVO</div>
                </div>
                <div id="layer-entities"></div>
            </div>
            <div class="z-10 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-6 py-3 rounded-xl text-center hidden max-w-md mx-auto" id="payout-banner">
                <p class="font-bold">🏁 CONTRATO CONCLUÍDO!</p>
                <p id="payout-desc" class="text-xs text-slate-200 mt-1"></p>
            </div>
        </div>

        <div class="w-1/3 bg-slate-900 flex flex-col border-l border-slate-800">
            <div class="grid grid-cols-2 bg-slate-950 p-2 gap-1">
                <button onclick="setMode('driver')" id="tab-driver" class="bg-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs">MODO PILOTO</button>
                <button onclick="setMode('passenger')" id="tab-passenger" class="text-slate-400 font-bold py-2.5 rounded-xl text-xs">PASSAGEIRO</button>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div class="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-xl">
                    <h3 id="panel-title" class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Radar de Contratos</h3>
                    <div id="ui-searching" class="text-center py-8 text-xs text-slate-400"><i class="fa-solid fa-satellite-dish animate-pulse text-amber-500 text-xl block mb-2"></i>A aguardar chamadas...</div>
                    <div id="ui-incoming" class="hidden space-y-4">
                        <div class="bg-slate-900 p-3 rounded-xl text-xs text-slate-300"><b>Rota:</b> Centro ➔ Aeroporto</div>
                        <button onclick="acceptMission()" class="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-xs">ACEITAR MISSÃO</button>
                    </div>
                    <div id="ui-progress" class="hidden space-y-4">
                        <div class="text-xs text-amber-400 text-center animate-pulse">➔ Viagem em curso com passageiro...</div>
                        <button onclick="completeMission()" class="w-full bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl text-xs">FINALIZAR E DESEMBARCAR</button>
                    </div>
                    <div id="ui-passenger" class="hidden space-y-4">
                        <button onclick="triggerRideRequest()" class="w-full bg-blue-600 font-bold py-3.5 rounded-xl text-xs text-white">PEDIR VIAGEM AGORA</button>
                        <div id="pass-status" class="text-xs text-center text-amber-400 hidden">A chamar motoristas...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
