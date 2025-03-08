using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace TicTacToe.Hubs  // Changed to plural "Hubs"
{
    public class GameHub : Hub
    {
        public async Task SendMove(int row, int col, string player)
        {
            await Clients.Others.SendAsync("ReceiveMove", row, col, player);
        }

        public async Task ResetGame()
        {
            await Clients.All.SendAsync("GameReset");
        }
        public async Task RestartGame()
        {
            await Clients.All.SendAsync("GameRestarted"); // Notify all players to reset

        }
    }
}